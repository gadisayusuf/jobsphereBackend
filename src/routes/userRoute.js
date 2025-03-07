import { getUsers, addUser,getUser } from "../controllers/userController.js";
import { userValidator } from "../middleware/validator.js";
import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id",getUser)
router.post("/", userValidator, addUser);

export default router;
