import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import {
  userCreateValidator,
  userUpdateValidator,
  handleValidationResult,
} from "../middleware/validator.js";
import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", userCreateValidator, handleValidationResult, addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", userUpdateValidator, handleValidationResult, updateUser);
export default router;
