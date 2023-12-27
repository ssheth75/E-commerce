import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  productName: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

let Product;
if (mongoose.models.Product) {
  Product = mongoose.model("Product");
} else {
  Product = mongoose.model("Product", ProductSchema);
}
export {Product};

// export const Product = model("Product", ProductSchema);
