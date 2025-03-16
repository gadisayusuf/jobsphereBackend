import User from "../models/userModel.js";
import bcrypt from "bcrypt";
const saltRound = 10;
import envConfig from "../config/envConfig.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { password, ...data } = req.body;
  const hashed = await bcrypt.hash(password, saltRound);
  try {
    const newUser = await User.create({ ...data, password: hashed });
    const token = jwt.sign({ id: newUser._id }, envConfig.JWT_SECRET);
    const { password: password, ...newData } = newUser.toObject();
    return res.json({ data: newData, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });
    const token = jwt.sign({ id: user._id }, envConfig.JWT_SECRET);
    const { password: userPass, ...data } = user.toObject();
    console.log(data);
    return res.json({ data, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
export const getUsers = async (req, res) => {
  const { role, email, password } = req.body;
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  const searchId = req.params.id;
  try {
    const user = await User.findById(searchId);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete user", error: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user", error: err });
  }
};
