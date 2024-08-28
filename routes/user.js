import express from "express";
import { getUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/:id", updateUser);

export default router;

