import mongoose from "mongoose";

const purchseHistorySchema = new mongoose.Schema({});

export const PurchaseHitory = mongoose.model("PurchaseHistory", purchseHistorySchema);