import express from "express";
import { addBook, getBooks, updateBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);

export default router;

