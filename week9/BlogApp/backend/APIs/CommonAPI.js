// mini express app
import express from "express";
import { login } from "../services/AuthServices.js";
import { UserModel } from "../models/UserModel.js";
import { compare, hash } from "bcryptjs";

export const commonRoute = express.Router();

// login route
commonRoute.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let {token,user} = await login(email,password);
    // save the cookie as http only cookie
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    });
    // sending the response now
    res.status(200).json({
        message:`${user.role} Logged In Successfully!`,
        payload: user
    })
})

// logout

commonRoute.get("/logout",async(req,res)=>{
    // clear the cookies
    res.clearCookie("token",{
        secure:false,
        sameSite:"lax",
        httpOnly:true
    })
    res.status(200).json({
        message: `logout successful!`
    })
})

// change password
commonRoute.put("/change-password",async(req,res)=>{
    // get the email,oldpassword,newpassword
    let {email,oldpassword,newpassword} = req.body;
    // chack if there's a user with this email or not 
    let user = await UserModel.findOne({email:email});
    if(!user){
        return res.status(401).json({
            message:"no user with this email"
        })
    }
    // compare the password
    let isMatchPassword = await compare(oldpassword,user.password);
    if(!isMatchPassword){
        return res.status(401).json({
            message:"Sorry wrong password"
        })
    }
    // now the passwords are same so update the password
    newpassword = await hash(newpassword,12);
    let updatedUser = await UserModel.findOneAndUpdate(
        {email:email},
        {$set:{password:newpassword}},
        {returnDocument:"after", runValidators:true}
    )
    // send the response
    res.status(200).json({
        message:"changes the password Successfully",
        payload: updatedUser
    })
})