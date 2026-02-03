import express from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
const app = express();

config() // process.env

// connect to db
const connectDB = async ()=>{
    try{
        await connect(process.env.MONGO_URL)
        console.log("DB connection success")
        app.listen(process.env.PORT,()=>{
            console.log("server Started Successfully")
        })
    }
    catch(err){
        console.log(err.message)
    }
}

connectDB()


// default error handler

app.use((err,req,res,next)=>{
    res.status(500).json({message:""})
})