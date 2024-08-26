import express from "express";
import { addCategory, getCategory, removeCategory } from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategory);
router.post("/", addCategory);
router.delete("/:id", removeCategory);

export default router;

