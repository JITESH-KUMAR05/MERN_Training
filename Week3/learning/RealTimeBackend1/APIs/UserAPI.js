import express from 'express';
import {UserModel} from '../models/UserModel.js'
export const userApp = express.Router();

// test routes
// userApp.get('/test',(req,res)=>{
//     res.json({message:"Test route"})
// })


// User API route

// create user
userApp.post('/users',async(req,res)=>{
    let newUser = req.body
    console.log(newUser)
    await UserModel.insertOne(newUser);
    res.status(200).json({message:"Added user successfully"})
})
// Read user
userApp.get('/users',async(req,res)=>{
    // read users from database
    let usersList = await UserModel.find();
    res.status(200).json({message:"users",payload:usersList})
})
// update 
// delete