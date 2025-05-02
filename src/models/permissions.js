import mongoose from "mongoose";

export const permissionsSchema = new mongoose.Schema({
    permission: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });
