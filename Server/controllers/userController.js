import { userModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { name, age, address, course } = req.body;

  if (name && age && address && course) {
    try {
      const user = await userModel.create({
        name,
        age,
        address,
        course,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json("Not saved");
  }
};

export const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
