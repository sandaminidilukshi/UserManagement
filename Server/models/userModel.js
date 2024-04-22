import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },
  course: {
    type: String,
  },
});

export const userModel = mongoose.model("users", userSchema);
