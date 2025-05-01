import express from "express";
import {gtWishList, addWishList, removeWishList} from "../controllers/wishListController.js";

const router = express.Router();

router.get("/", gtWishList);
router.post("/", addWishList);
router.delete("/:id", removeWishList);

export default router;

