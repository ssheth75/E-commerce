import {Product} from "../../models/productModel.js";
import {mongooseConnect} from "../../lib/mongoose.js";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    if (method === 'GET') {
        const productDoc = await Product.find({});
        res.json(productDoc);
    } 
    if (method === 'POST') {
        const {productName, description, price} = req.body;
        const productDoc = await Product.create({
            productName,
            description,
            price
        })
        res.json(productDoc);

    }
}