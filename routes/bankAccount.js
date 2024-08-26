import express from "express";
import { addAccount, getAccounts, removeAccount, updateAccount } from "../controllers/bankAccountController.js";

const router = express.Router();

router.post("/", addAccount);
router.get("/", getAccounts);
router.put("/:id", updateAccount);
router.delete("/:id", removeAccount);

export default router;