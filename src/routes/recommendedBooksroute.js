import express from "express";
import { addRecommendedBooks, removeRecommendedBooks } from "../controllers/recommendedBooksController.js";

const router = express.Router();

router.post("/", addRecommendedBooks);
router.delete("/:id", removeRecommendedBooks);

export default router;

