import mongoose from "mongoose";

const purchaseHistorySchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ["cash", "card", "mobile", "bank"],
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
        enum: ["onTheWay", "completed", "cancelled"],
    },
});

export const PurchaseHistory = mongoose.model("PurchaseHistory", purchaseHistorySchema);