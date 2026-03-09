// building the mini express application
import express from "express";
import { register } from "../services/AuthServices.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { validUSer } from "../middlewares/validUser.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const userRoute = express.Router();

// register
userRoute.post("/users",async(req,res)=>{
    let userObj = req.body;
    // console.log(userObj);
    let createdObj = await register({...userObj,role:"USER"});
    res.status(201).json({
        message:"user created",
        success:true,
        payload:createdObj
    })    
})

// read all articles
userRoute.get("/articles", verifyToken("USER"), async(req,res) => {
    let allArticles = await ArticleModel.find({isArticleActive:true}).populate("author comments.user");
    res.status(200).json({
        message:"All Articles",
        payload: allArticles
    });
})

// // adding one comment on an article
// userRoute.put("/user/:uid/article/:aid",verifyToken("USER"),validUSer, async(req,res) => {
//     let {uid,aid} = req.params;
//     // console.log(aid)
//     if(uid != req.user.userId){
//         return res.status(403).json({message:"forbidden"})
//     }
//     // we have already checked if it's a valid user or not now we just need to find out if the article is present or not
//     let articleofDB = await ArticleModel.findOne({_id:aid,isArticleActive:true});
//     // let articleofDB = await ArticleModel.find();
//     console.log(articleofDB)
//     if(!articleofDB){
//         return res.status(404).json({
//             message:"Article not found"
//         })
//     }

//     // now we need to push the comment 
//     let newArticle = await ArticleModel.findOneAndUpdate(
//         {_id:aid,isArticleActive:true},
//         {$push:{"comments":{user:uid,comment:req.body.comment}}},
//         {returnDocument:"after"}
//     ).populate("comments.user author")

//     res.status(200).json({
//         message:"comment added",
//         payload:newArticle
//     })
// })




// adding one comment on an article
userRoute.put("/articles",verifyToken("USER"), async(req,res) => {
    let {user,articleId, comment} = req.body;
    // console.log(aid)
     if(user != req.user.userId){
        return res.status(403).json({message:"forbidden"})
    }
    // we have already checked if it's a valid user or not now we just need to find out if the article is present or not
    let articleofDB = await ArticleModel.findOneAndUpdate(
        {_id:articleId,isArticleActive:true},
        {$push:{comments:{user,comment}}},
        {returnDocument:"after", runValidators:true}

    );
    // console.log(articleofDB)
    // let articleofDB = await ArticleModel.find();
    // console.log(articleofDB)
    if(!articleofDB){
        return res.status(404).json({
            message:"Article not found"
        })
    }

    // now we need to push the comment 
    // let newArticle = await ArticleModel.findOneAndUpdate(
    //     {_id:aid,isArticleActive:true},
    //     {$push:{"comments":{user:uid,comment:req.body.comment}}},
    //     {returnDocument:"after"}
    // ).populate("comments.user author")

    res.status(200).json({
        message:"comment added",
        payload:articleofDB
    })
})