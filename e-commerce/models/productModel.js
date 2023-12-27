import {model, Schema} from "mongoose";

const ProductSchema = new Schema({
    productName: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
})

export const Product = model('Product', ProductSchema)
