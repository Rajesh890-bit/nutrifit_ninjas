const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
    name : { type : String , require : true },
    category : { type : String , require :true },
    calories : { type : Number , require :true },
    exerciseId : { type : String , require : true },

}, { versionKey: false });

const ExerciseModel = mongoose.model("hakathon_exercise", exerciseSchema);

module.exports = { ExerciseModel };
