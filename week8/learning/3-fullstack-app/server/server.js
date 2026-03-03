// creating the server 
import express from "express"
import {config} from "dotenv"
import {connect} from "mongoose";
import {UserApp} from "./APIs/UserAPI.js"
import cors from "cors";
config()


const app = express();

app.use(cors({
  origin:["http://localhost:5173"]
}))


const port = process.env.PORT;
// console.log(port);

async function ConnectDB() {
    try {
        await connect(process.env.MONGO_URI);
        console.log("mongoDB connected")
        app.listen(port, ()=>{
            console.log(`Application running on port ${port}`)
        });
    } catch (error) {
        console.log(error.message)
    }
}

ConnectDB();

app.use(express.json());
app.use("/user-api",UserApp)

// default error handling middleware
app.use((err,req,res,next)=>{
    // Mongoose validation Error
    if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});