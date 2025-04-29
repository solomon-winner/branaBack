import express from "express";
import { addFavouriteCategory, 
    removeFavouriteCategory, 
    addFavouriteBook, 
    removeFavouriteBook, 
    addFavouriteAuthor, 
    removeFavouriteAuthor } from "../controllers/favouriteController.js";

const router = express.Router();

router.post("/", addFavouriteCategory);
router.delete("/:id", removeFavouriteCategory);
router.post("/", addFavouriteBook);
router.delete("/:id", removeFavouriteBook);
router.post("/", addFavouriteAuthor);
router.delete("/:id", removeFavouriteAuthor);

export default router;

