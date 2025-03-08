import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { userValidator } from "../middleware/validator.js";
import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", userValidator, addUser);
router.delete("/:id", deleteUser);
router.patch("/:id",updateUser)
export default router;
