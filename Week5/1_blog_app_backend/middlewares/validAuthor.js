import { UserTypeModel } from "../models/UserModel.js";


export const validAuthor = async(req,res,next) => {
    // get author id
    let authorId = req.body?.author || req.params?.authorid;
    // verify the author
    let isMatchUser = await UserTypeModel.findById(authorId);
    if(!isMatchUser || isMatchUser.role != "AUTHOR"){
        return res.status(404).json({message:"author is not valid"})
    }
    // give to the next middleware
    next();
}