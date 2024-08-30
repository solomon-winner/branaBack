import express from "express";
import { addWishList, removeWishList} from "../controllers/wishListController.js";

const router = express.Router();

router.post("/", addWishList);
router.delete("/:id", removeWishList);

export default router;

