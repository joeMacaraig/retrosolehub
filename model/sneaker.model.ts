// Sneaker Model
import { Schema, model, models } from "mongoose";

const SneakerSchema = new Schema({
  id: {
    type: String,
    required: [true, "Sneaker is required."],
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  colorway: {
    type: String,
  },
  condition: {
    type: String,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "the name is required."],
  },
  price: {
    type: String,
    required: [true, "the price is required."],
  },
  releaseDate: {
    type: String,
  },
  images: {
    type: Object,
    required: [true, "images are required."],
  },
  shoeType: {
    type: String,
  },
});

const Sneaker = models.Sneakers || model("Sneakers", SneakerSchema);

export default Sneaker;
