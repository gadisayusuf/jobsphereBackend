import userModel from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {

    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  const searchId = req.params.id;
  try {
    const user = await userModel.findById(searchId);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const addUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteUser = async(req,res)=>{
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.send("User deleted successfully");
  } catch (err) {
    res.error("Failed to delete user", err);
  }
}
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndUpdate(id);
    res.send("User updated successfully");
  } catch (err) {
    res.send("failed to update user")
  }
};
