// create mini express app
import express from "express"
import {UserModel} from "../Models/UserModel.js"
export const UserApp = express.Router();
// user api route

// create user
UserApp.post("/users",async(req,res)=>{
    let newUser = req.body;
    let newUserDoc = new UserModel(newUser);
    let user = await newUserDoc.save();
    res.status(201).json({message:"new user created",success:true, payload:user})
})
// read all user
UserApp.get("/users", async(req,res) => {
    let allUsers = await UserModel.find({status:true});
    if(allUsers.length===0){
        return res.status(404).json({message:"No Users Exist",success:true})
    }
    res.status(200).json({message:"",success:true,payload:allUsers})
})
// read user by id
UserApp.get("/users/:id",async(req,res)=>{
    // get the id
    let id = req.params.id;
    // find the user exist or not 
    let user = await UserModel.findOne({_id:id,status:true})
    // if not exist 
    if(!user){
        return res.status(404).json({message:"user not exist",success:false})
    }
    // exist
    res.status(200).json({message:"user found",payload:user,success:true});
})
// delete user by id (soft delete)
UserApp.delete("/users/:id",async(req,res) => {
    // get the id
    let id = req.params.id;
    // find the user exist of not 
    let user = await UserModel.findOneAndUpdate({_id:id,status:true},{$set:{status:false}});
    // if exist then change the the status of the user
    if(!user){
        return res.status(404).json({message:"user not exist or blocked",success:false})
    }
    res.status(200).json({message:"removed",success:true});
   
})
// Activate user (change the status to true)
// PUT(complete change) & PATCH (Particial changes)
UserApp.patch("/users/:id",async(req,res)=>{
     // get the id
    let id = req.params.id;
    // find the user exist of not 
    let user = await UserModel.findOneAndUpdate({_id:id,status:false},{$set:{status:true}},{returnDocument:"after"});
    // if exist then change the the status of the user
    if(!user){
        return res.status(404).json({message:"user not exist",success:false})
    }
    res.status(200).json({message:"Activated",success:true,payload:user});
   
})

// update the user by id