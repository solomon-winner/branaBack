import express from "express";
import { addFavouriteCategory, removeFavouriteCategory } from "../controllers/favouriteCategoryController.js";

const router = express.Router();

router.post("/", addFavouriteCategory);
router.delete("/:id", removeFavouriteCategory);

export default router;

