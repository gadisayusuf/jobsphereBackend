import jwt from "jsonwebtoken";
import envConfig from "../config/envConfig.js";
import  User  from "../models/userModel.js"

export const authenticate = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, envConfig.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Invalid Token",
    });
  }
};
