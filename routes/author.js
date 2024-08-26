import express from "express"
import {getAuthors,  addAuthors, updateAuthors } from "../controllers/authorController.js"

const router = express.Router();

router.get("/", getAuthors);
router.post("/", addAuthors);
router.put("/:id", updateAuthors);

export default router;