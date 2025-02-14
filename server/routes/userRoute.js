import express from "express";
import { registerUser, loginUser, verifyUserController } from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify", verifyUserController);

export default router;
