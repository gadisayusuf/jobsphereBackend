import {
  register,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import {
  registerValidator,
  updateValidator,
  loginValidator,
} from "../validation/validator.js";
import { handleValidationResult } from "../middleware/validation.middleware.js";
import express from "express";
import { authenticate } from "../middleware/authenticate.middleware.js";
import { protectAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/login", loginValidator, handleValidationResult, login);
router.post("/register", registerValidator, handleValidationResult, register);
router.get("/", authenticate,protectAdmin,getUsers);
router.get("/:id", authenticate,getUser);
router.delete("/:id",authenticate, deleteUser);
router.patch("/:id", updateValidator, handleValidationResult, updateUser);
export default router;
