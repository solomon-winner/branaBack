import express from "express";
import { addShelve, removeShelve, updateShelve, PayForShelve } from "../controllers/shelveController.js";

const router = express.Router();

router.post("/", addShelve);
router.put("/:id",updateShelve);
router.post("/pay", PayForShelve);
router.delete("/:id", removeShelve);

export default router;

