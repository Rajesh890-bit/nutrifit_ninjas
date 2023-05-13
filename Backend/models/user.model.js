const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, enum: ["male", "female"], require: true },
    password: { type: String, require: true },

    height: { type: Number, require: true },
    weight: { type: Number, require: true },
    age: { type: Number, require: true },
    goal: {
      type: String,
      enum: ["Lose Weight", "Maintain Weight", "Gain Weight"],
      require: true,
    },
    dob: { type: String, require: true },
    country: {
      type: String,
      enum: ["india", "america", "russia"],
      require: true,
    },
    issues: {
      type: String,
      enum: [
        "Lack of Time",
        "Healthy Diet Lack Variety",
        "Stree Around Food Choice",
        "Food Cravings",
        "I did no face any barrier",
      ],
      require: true,
    },
    activity: {
      type: String,
      enum: ["Not Very Active", "Lightly Active", "Very Active"],
      rquire: true,
    },
    avatar: { type: String, rquire: true },
    userId: { type: String, rquire: true },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("hakathon_user", userSchema);

module.exports = { UserModel };
