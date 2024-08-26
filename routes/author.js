import express from "express"
import {getAuthors,  addAuthors, updateAuthors } from "../controllers/authorController.js"

const router = express.Router();

router.get("/author", getAuthors);
router.post("/author", addAuthors);
router.put("/author:id", updateAuthors);

export default router;