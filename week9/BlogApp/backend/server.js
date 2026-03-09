// importing the express
import express from "express"
import {config} from "dotenv"
import {connect} from "mongoose"
import cookieParser from "cookie-parser";
import cors from "cors"
import { userRoute } from "./APIs/UserAPI.js";
import { commonRoute } from "./APIs/CommonAPI.js";
import { adminRoute } from "./APIs/AdminAPI.js";
import { authorRoute } from "./APIs/AuthorAPI.js";

config();
const app = express();

const port = process.env.PORT;

const connectDB = async() => {
    await connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB Successfully");
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`);
    })
}

connectDB();

// body parser
app.use(express.json());
// cookie parser
app.use(cookieParser());
// cors
// app.use(cors({
//     origin:["http://localhost:5173"]
// }));
// user api
app.use("/user-api",userRoute);
app.use("/common-api",commonRoute);
app.use('/admin-api',adminRoute);
app.use('/author-api',authorRoute);
app.use('/common-api',commonRoute)



// dealing with invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message: `${req.url} is Invalid Path`});
})

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
  // token expiration
  if(err.name === "TokenExpiredError") {
    return res.status(401).json({
      message: "please login again, token expired"
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  // Invalid JSON body (e.g. trailing comma, unquoted key)
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      message: "Invalid JSON in request body",
      details: err.message
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
    name : err.name
  });
});