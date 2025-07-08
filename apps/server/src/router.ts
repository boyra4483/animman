import { Router } from "express";
import userController from "@animman/server/UserController";

const router = Router();
router.post("/auth/verify", userController.auth);

export default router;
