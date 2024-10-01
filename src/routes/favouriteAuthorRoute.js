import express from "express";
import { addFavouriteAuthor, removeFavouriteAuthor } from "../controllers/favouriteAuthorController.js";

const router = express.Router();

router.post("/", addFavouriteAuthor);
router.delete("/:id", removeFavouriteAuthor);

export default router;

