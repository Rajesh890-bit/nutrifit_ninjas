const express = require("express");
const foodRouter = express.Router();
const { FoodModel } = require("../models/food.model");

// CREATE FOOD
foodRouter.post('/add',async(req,res)=>{
    try {
        const food = FoodModel(req.body);
        await food.save();
    } catch (error) {
        
    }
})

module.exports = { userRouter };
