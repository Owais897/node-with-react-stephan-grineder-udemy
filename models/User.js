const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema); // one argument mean to fetch out two arguments mean to put data
