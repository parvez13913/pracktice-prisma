import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.post("/create-profile", UserController.createOrUpdateProfile);

export const UserRoutes = router;
