import mongoose from "mongoose";

const shelveSchema = new mongoose.Schema({});
export const Shelve = mongoose.model("Shelve", shelveSchema);