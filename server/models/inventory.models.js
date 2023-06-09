import mongoose from "mongoose";
const { Schema } = mongoose;

const InventorySchema = new Schema({},{ strict: false });

export const Inventory = mongoose.model("Inventory", InventorySchema);