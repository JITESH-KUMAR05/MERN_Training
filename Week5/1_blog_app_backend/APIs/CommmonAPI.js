import express from "express";
import {authenticate} from '../services/authService.js'

export const commonRouter = express.Router();

// login
commonRouter.post("/login", async (req, res) => {
  // get the email and password
  let { email, password } = req.body;
  // call the authenticate function
  let { token, user } = await authenticate(email, password);
  // save token as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  // send res
  res.status(200).json({ message: "Author login seccess", payload: user });
});
// logout

// logout request
commonRouter.get('/logout',(req,res)=>{
    // clear the cookie 
    res.clearCookie('token',{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    })

    res.status(200).json({message:"logout successfully"})
})
