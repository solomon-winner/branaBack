import express from "express";
import { addShelve, removeShelve, removeWholeShelve, PayForShelve } from "../controllers/shelveController.js";

const router = express.Router();

router.post("/", addShelve);
router.post("/pay", PayForShelve);
router.delete("/remove/:userId", removeWholeShelve);
router.delete("/:id", removeShelve);

export default router;

