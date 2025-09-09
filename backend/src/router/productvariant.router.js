import express from "express"
import { createProductVariant, deleteProductVariant, getAllProductVariant, getProductVariantById, updateProductVariant } from "../controller/productvariant.controller.js";

const ProductVariantRouter = express.Router();

ProductVariantRouter.route("/")
.get(getAllProductVariant)
.post(createProductVariant)

ProductVariantRouter.route("/:id")
.get(getProductVariantById)
.put(updateProductVariant)
.delete(deleteProductVariant)

export default ProductVariantRouter