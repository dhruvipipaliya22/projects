import express from "express"
import { createProduct, deleteProduct, getallProduct, getProductById, updateProduct } from "../controller/product.controller.js";

const ProductRouter = express.Router();

ProductRouter.route("/")
.get(getallProduct)
.post(createProduct)

ProductRouter.route("/:id")
.get(getProductById)
.put(updateProduct)
.delete(deleteProduct)

export default ProductRouter