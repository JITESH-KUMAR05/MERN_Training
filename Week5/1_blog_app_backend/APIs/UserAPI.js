import express from 'express'
import {register,authenticate} from '../services/authService.js'

export const userRoute = express.Router()


// register user
userRoute.post("/users",async(req,res)=>{
    // get user object from req
    let userObj = req.body;
    // call register function
    const newUserObj = await register({...userObj,role:"USER"});

    // send the res
    res.status(201).json({message:"user created",payload:newUserObj});

})
// authenticate user (login)
userRoute.post("/login",async(req,res)=>{
    // get the email and password
    let {email,password,role} = req.body;
    // call the authenticate function
    let {token,user} = await authenticate(email,password,role);
    // save token as httpOnly cookie
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false,
    });
    // send res
    res.status(200).json({message:"user login seccess",payload:user});

})
// read all articles
// add comment to an article
