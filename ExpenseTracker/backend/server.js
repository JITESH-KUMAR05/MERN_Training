const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();


const app = express();
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Express Tracking app is running this is home route")
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
});