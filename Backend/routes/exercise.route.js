const express = require("express");
const exierciesRouter = express.Router();
const { ExerciseModel } = require("../models/exercise.model");

// GET REQUEST
// exierciesRouter.get("/", async (req, res) => {
//   try {
//     const { calories, category } = req.query;
//     const query = {};
//     if (calories) {
//       query.calories = calories;
//     }
//     if (category) {
//       query.category = category;
//     }
//     const food = await FoodModel.find();
//     res.status(200).send({ msg: "All Food Data!!", ok: true, food: food });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });

// CREATE FOOD
exierciesRouter.post("/add", async (req, res) => {
  try {
    const exercise = ExerciseModel(req.body);
    await exercise.save();
    res.status(200).send({ msg: "Exercise Created!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// // UPDATE FOOD
// exierciesRouter.patch("/update/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const food = await FoodModel.findByIdAndUpdate({ _id: id }, req.body);
//     res.status(200).send({ msg: "Food Updated!", ok: true, food: food });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });
// // DELETE FOOD
// exierciesRouter.delete("/delete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await FoodModel.findByIdAndDelete({ _id: id });
//     res.status(200).send({ msg: "Food Deleted!", ok: true });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });

module.exports = { exierciesRouter };
