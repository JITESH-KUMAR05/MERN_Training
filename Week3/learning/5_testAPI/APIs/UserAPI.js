// create the mini express application

import express from "express"
import { UserModel } from '../models/UserModel.js'

export const userApp = express.Router()
// we have crearted the mini express or separate route application 

// let users = [] // with this we were able to get the data 
// now we have to fetch the data from mongoDB
userApp.get('/users',async (req,res)=>{
    let data = await UserModel.find();
    res.status(200).json({message:"All users",payload:data});
})

userApp.post('/users',async(req,res)=>{
    // collect or retrive or extract the data coming in the request
    let givenData =req.body;
    // console.log(givenData);
    let newUserDoc = new UserModel(givenData);
    await newUserDoc.save();
    res.status(201).json({message:"user Created"})
})

// put request handler
userApp.put('/users/:id',async(req,res)=>{
    let id = req.params.id;
    let modifiedUser = req.body;
    let latestUser = await UserModel.findByIdAndUpdate({id},{$set:{...modifiedUser}},{new:true,runValidators:true})
})

// delete request handler
userApp.delete('/users/:id', async(req,res)=>{
    let givenId = req.params.id;
    let deletedUser = await UserModel.find
})