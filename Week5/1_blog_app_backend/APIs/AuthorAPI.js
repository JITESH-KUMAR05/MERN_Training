import express from 'express'
import {register,authenticate} from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js';
import { ArticleModel } from '../models/ArticleModel.js';
import {validAuthor} from '../middlewares/validAuthor.js'
export const authorRoute = express.Router()


// register author
authorRoute.post("/users",async(req,res)=>{
    // get user object from req
    let authorObj = req.body;
    // call register function
    let newAuthorObj = await register({...authorObj,role:"AUTHOR"});

    // send the res
    res.status(201).json({message:"Author created",payload:newAuthorObj});

})
// authenticate author
authorRoute.post("/login",async(req,res)=>{
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
    res.status(200).json({message:"Author login seccess",payload:user});

})
// create article
authorRoute.post("/articles",validAuthor,async(req,res)=>{
    // get the article from req
    let articleObj = req.body;
    // validate the author
    // let isMatchUser = await UserTypeModel.findById(articleObj.author);
    // if(!isMatchUser || isMatchUser.role != "AUTHOR"){
    //     return res.status(401).json({message:"author not exist!"})
    // }
    // create the article document 
    let articleDoc = new ArticleModel(articleObj);
    // save the article
    let article = await articleDoc.save();
    // send res
    res.status(201).json({message:"article created",payload:article});
})

// read articles
authorRoute.get("/articles/:authorid",validAuthor,async(req,res)=>{
    // get the author id
    let authorId = req.params.authorid;
    // check the author
    // let isMatchUser = await UserTypeModel.findById(authorId);
    // if(!isMatchUser || isMatchUser.role != "AUTHOR"){
    //     return res.status(401).json({message:"author not exist!"})
    // }
    // read the articles by the author
    let allArticles = await ArticleModel.find({author:authorId,isArticleActive:true});
    // res
    res.status(200).json({message:"author articles",payload:allArticles})
})

// edit article
// delete (soft delete)
// read articles of author