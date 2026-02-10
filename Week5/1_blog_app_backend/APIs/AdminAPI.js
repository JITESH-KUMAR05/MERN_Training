import express from 'express'
import { UserTypeModel } from '../models/UserModel.js';

export const adminRoute = express.Router()

// authenticate admin  --> this will also be in common
// adminRoute.post('/login',async(req,res)=>{
//     let {email,password} = req.body;
//     let findAdmin = await UserTypeModel.findOne({email:email});
//     if(!findAdmin){
//         res.status(403).json({message:"Invalid admin"})
//     }
//     if(findAdmin.password !== password){
//         res.status(403).json({message:"Invalid admin password"})
//     }
//     res.status(200).json({message:"Admin loggedin"})
// })
// read all articles
// block or unblock user roles
