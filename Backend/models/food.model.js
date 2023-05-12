const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
    name : { type : String , require : true },
    category : { type : String , require :true },
    calories : { type : Number , require :true },
    ingredients: { type: 'array', items: { type: 'string' } },
    foodId : { type : String , require : true },

}, { versionKey: false });

const FoodModel = mongoose.model("hakathon_food", foodSchema);

module.exports = { FoodModel };
