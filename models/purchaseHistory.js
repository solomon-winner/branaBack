import mongoose from "mongoose";
import { BankAccountSchema } from "./bankAccount";
import { AddressSchema } from "./address"; // Assuming AddressSchema is defined in address.js

const purchaseHistorySchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    deliveryAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true,
    },
    bankAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BankAccount",
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

export const PurchaseHistory = mongoose.model("PurchaseHistory", purchaseHistorySchema);