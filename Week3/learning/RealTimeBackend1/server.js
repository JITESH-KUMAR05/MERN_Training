import express from 'express'
import { userApp } from './APIs/UserAPI.js'
import {connect} from 'mongoose'
const app = express();


// connect to db server
async function connectDB(){
    // connect('mongodb://localhost:27017')
    // .then(()=>console.log("a"))
    // .catch((err)=>console.log("b",err))
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("successfully connected to DB");
        app.listen(port,()=>{
        console.log("Server running at port 4000");
})
        
    }
    catch(err){
        console.log("failed to connect with DB");
        
    }
    
}
connectDB();
const port = 4000;

app.use('/user-api',userApp);
app.use(express.json())



