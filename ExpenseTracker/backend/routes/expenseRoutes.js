const express = require("express");
const Expense = require("../models/expense");

const router = express.Router();

router.post("/", async (req,res)=>{
    try{
        const {title, amount, category, date} = req.body;

        if(!title || !amount || !category){
            return res.status(400).json({message: "All fields are required!"});
        }

        const expense = await Expense.create({
            title,
            amount,
            category,
            date
        });

        res.status(201).json(expense);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


module.exports = router;