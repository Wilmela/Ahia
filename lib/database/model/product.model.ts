import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true },
  condition: {
    type: String,
    enum: ["New", "Used"],
    required: true,
    default: "New",
  },
  availability: {
    type: String,
    enum: ["Sold", "Available"],
    required: true,
    default: "Available",
  },
  description: { type: String, required: true },
  dealer: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: "User" },
  phone: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  negotiable: { type: Boolean, required: true, default: false },
  createdAt:{type: Date, default: Date.now},
  updatedAt:{type: Date, default: Date.now}
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
