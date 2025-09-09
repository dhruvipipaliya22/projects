import express from "express"
import { createProductimage, deleteProductImage, getallProductImage, getProductImageById, updateProductImage } from "../controller/productimage.controller.js";
import { upload } from "../middleware/multer.js";

const ProductImageRouter = express.Router();

ProductImageRouter.get("/product/:productId",getallProductImage)

.post("/", upload.single("image"),createProductimage)

ProductImageRouter.route("/:id")
.get(getProductImageById)
.put("/:id", upload.single("image"),updateProductImage)
.delete(deleteProductImage)

export default ProductImageRouter