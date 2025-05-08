import express from "express";
import { addCategory, getAllCategory, getCategoryById, removeCategory, updateCategory } from "../controllers/categoryController.js";
import { validateObjectIds } from "../middlewares/validateObjectIds.js";

const router = express.Router();

router.get("/:id", validateObjectIds(['params']), getCategoryById);
router.put("/:id", validateObjectIds(['params']), updateCategory);
router.get("/", getAllCategory);
router.post("/", addCategory);
router.delete("/:id", validateObjectIds(['params']),removeCategory);

export default router;

