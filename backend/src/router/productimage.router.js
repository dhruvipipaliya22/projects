import express from "express"
import { createProductimage, deleteProductImage, getallProductImage, getProductImageById, updateProductImage } from "../controller/productimage.controller.js";
import { upload } from "../middleware/multer.js";

const ProductImageRouter = express.Router();

ProductImageRouter.get("/product/:productId",getallProductImage)

ProductImageRouter.post("/", upload.single("image"), createProductimage)
ProductImageRouter.put("/:id", upload.single("image"), updateProductImage)

ProductImageRouter.get("/:id",getProductImageById)
ProductImageRouter.delete("/:id",deleteProductImage)

export default ProductImageRouter