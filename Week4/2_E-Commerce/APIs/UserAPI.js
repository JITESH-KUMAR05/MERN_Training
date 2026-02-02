// creating the mini express application

import express from 'express'
import {hash} from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';
import { ProductModel } from '../models/ProductModel.js';

export const userApp = express.Router()

// create user
userApp.post('/users',async(req,res)=>{
    // getting the new user
    let newUser = req.body;

    // hashing the password
    let hashedPassword = await hash(newUser.password,12);
    newUser.password = hashedPassword;

    // making new doc for the user
    let newUserDoc = new UserModel(newUser);

    // saving this doc
    await newUserDoc.save();

    res.status(201).json({message:"user created",payload:newUserDoc})
    
})


// add products to user's cart

userApp.put('/user-cart/userid/:userid/productid/:productid',async(req,res)=>{
    let userId = req.params.userid;
    let productId = req.params.productid;
    let product = await ProductModel.findById(productId);

    // storing the product id in the user cart
    let latestCart = await UserModel.updateOne({_id:userId},{$push:{"cart":{"product.productName":productId}}})
    res.status(200).json({message:"Item Added to cart"})
})



// add products to the users cart

userApp.get('/users', async(req,res)=>{
    
})