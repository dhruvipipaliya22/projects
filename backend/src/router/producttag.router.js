import express from "express"
import { createProductTag, deleteProductTag, getAllProductTags, getProductTagById, updateProductTag } from "../controller/producttag.controller.js";

const producttagRouter = express.Router();

producttagRouter.route("/")
.get(getAllProductTags)
.post(createProductTag)

producttagRouter.route("/:id")
.get(getProductTagById)
.put(updateProductTag)
.delete(deleteProductTag)

export default producttagRouter