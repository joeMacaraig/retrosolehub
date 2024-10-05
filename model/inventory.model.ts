// Inventory Model
import { Schema, model, models } from "mongoose";

const InventorySchema = new Schema({
  sneaker: {
    type: Schema.Types.ObjectId,
    ref: "Sneakers",
  },
  featured: {
    type: Boolean,
  },
  showInCatalog: {
    type: Boolean,
  },
  tags: {
    type: [Array],
    required: [true, "tags are required for the shoe"],
  },
});

const Inventory = models.Inventories || model("Inventories", InventorySchema);

export default Inventory;
