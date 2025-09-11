import express from "express";
import { createProductView, deleteProductView, getProductView, getProductViewById } from "../controller/productview.controller.js";

const ProductViewRouter = express.Router();

ProductViewRouter.route("/")
.get(getProductView)
.put(createProductView)

ProductViewRouter.route("/:id")
.get(getProductViewById)
.delete(deleteProductView)

export default ProductViewRouter