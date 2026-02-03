// creating the mini express application

import express from 'express'
import {hash} from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';
import { ProductModel } from '../models/ProductModel.js';
import {Types} from 'mongoose'

export const userApp = express.Router()

// create user
userApp.post('/users',async(req,res)=>{
    // getting the new user
    let newUser = req.body;
    // validate new user
    await new UserModel(newUser).validate()
    // try{
    //     new UserModel(newUser).validate()
    // }
    // catch(err){
    //     console.log(err.message);
    // }
    // hashing the password
    let hashedPassword = await hash(newUser.password,12);
    newUser.password = hashedPassword;

    // making new doc for the user
    let newUserDoc = new UserModel(newUser);

    // saving this doc
    await newUserDoc.save({validateBeforeSave:false});

    res.status(201).json({message:"user created",payload:newUserDoc})
    
})


// add products to user's cart

// userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
//     // getting the user-id and product-id from the url params
//     let userId = req.params.uid;
//     let productId = req.params.pid;
//     // perform the update so need to check if user exist or not and then product exist or not
//     // check user
//     let user = await UserModel.findById(userId);
//     if(!user){
//         return res.status(401).json({message:"user not found"});
//     }
//     let product = await ProductModel.findById(productId);
//     if(!product){
//         return res.status(401).json({message:"product not found"});
//     }
//     // storing the product id in the user cart
//     // perform update
//     // let modifiedUser = await UserModel.updateOne({_id:userId},{$push:{"cart":{"product.productName":productId}}})
//     // res.status(200).json({message:"Item Added to cart"})
//     let checkPrdExistInCart = await UserModel.findById(userId)
//     let modifiedUser = await UserModel.findByIdAndUpdate(userId,
//         {
//             $push:{cart:{product:productId}}
//         },
//         {new:true}
//     ).populate("cart.product","productName price")
//     res.status(200).json({message:"cart updated",payload:modifiedUser})
// })


userApp.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>{
    // getting the user-id and product-id from the url params
    let userId = req.params.uid;
    let productId = req.params.pid;
    // perform the update so need to check if user exist or not and then product exist or not
    // check user
    let user = await UserModel.findById(userId);
    if(!user){
        return res.status(401).json({message:"user not found"});
    }
    let prdt = await ProductModel.findById(productId);
    if(!prdt){
        return res.status(401).json({message:"product not found"});
    }
    // storing the product id in the user cart
    // perform update
    // let modifiedUser = await UserModel.updateOne({_id:userId},{$push:{"cart":{"product.productName":productId}}})
    // res.status(200).json({message:"Item Added to cart"})
    let checkPrdExistInCart = await UserModel.findById(userId);
    checkPrdExistInCart = checkPrdExistInCart.cart;
    // console.log(checkPrdExistInCart)
    
    // console.log(typeof(checkPrdExistInCart))
    // let ObjPrdID = new Types.ObjectId(productId);
    // console.log(ObjPrdID);
    
    
    let ifExist = checkPrdExistInCart.find((obj)=>{
         console.log(obj);
         console.log(productId)
        // return obj;
        if(obj.product.toString() === productId){
            return obj;
        }
        
    });
    console.log(ifExist);
    
    let modifiedUser;
    
    if(!ifExist) {
        modifiedUser = await UserModel.findByIdAndUpdate(userId,
        {
            $push:{cart:{product:productId,quantity: 1}}
        },
        {new:true}
        ).populate("cart.product","productName price")
    }
    else{
        console.log("exist in cart already");

        modifiedUser = await UserModel.findByIdAndUpdate(userId,
        {
            $set:{cart:{product:productId,quantity:ifExist.quantity + 1}}
        },
        {new:true}
    ).populate("cart.product","productName price")
        
    }
    
    res.status(200).json({message:"cart updated",payload:modifiedUser})
})


// Reading the user data with alll the information about the user and all the cart items with details not only references

userApp.get('/users/:id', async(req,res)=>{
    // reading the user id with from params
    let uid = req.params.id;

    let userList = await UserModel.findById(uid).populate("cart.product","productName price");
    // console.log(userList);

    res.status(200).json({message:"Users details",payload:userList})
})