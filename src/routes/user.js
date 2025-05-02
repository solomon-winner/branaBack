import express from "express";
import { getUsers, getAUserById, addUser,updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);
router.get("/:userId", getAUserById);
router.get("/", getUsers);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;

