import express from "express";
import { addCategory, getCategory, removeCategory } from "../controllers/categoryController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/", addCategory);
router.delete("/:id", validateObjectIds(['params']),removeCategory);

export default router;

