import express from "express";
import { addSavedBooks, removeSavedBooks } from "../controllers/savedBooksController.js";

const router = express.Router();

router.post("/", addSavedBooks);
router.delete("/:id", removeSavedBooks);

export default router;

