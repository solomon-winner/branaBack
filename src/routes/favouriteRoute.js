import express from "express";
import { addFavouriteCategory, 
    removeFavouriteCategory, 
    getFavouriteCategory,
    getFavouriteBook,
    getFavouriteAuthor,
    addFavouriteBook, 
    removeFavouriteBook, 
    addFavouriteAuthor, 
    removeFavouriteAuthor } from "../controllers/favouriteController.js";

const router = express.Router();

router.get("/category", getFavouriteCategory);
router.get("/book", getFavouriteBook);
router.get("/author", getFavouriteAuthor);
router.post("/category", addFavouriteCategory);
router.delete("/category/:id", removeFavouriteCategory);
router.post("/book", addFavouriteBook);
router.delete("/book/:id", removeFavouriteBook);
router.post("/author", addFavouriteAuthor);
router.delete("/author/:id", removeFavouriteAuthor);

export default router;

