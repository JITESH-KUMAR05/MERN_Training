
import jwt from "jsonwebtoken"
import { UserModel } from "../models/UserModel.js";

export const verifyToken = async(req,res,next) => {
    // read the token
    let token = req.cookies?.token;
    if(!token){
        return res.status(400).json({
            message:"Unauthorized req, please login"
        })
    }
    // decode the token
    let decodedToken = jwt.verify(token,process.env.JWT_SECRET)

    // console.log(decodedToken)
    let user = await UserModel.findById(decodedToken.userId)

    if(!user){
        return res.status(401).json({
            message:"user no longer exists!"
        });
    }

    req.user = decodedToken;

    next();
}