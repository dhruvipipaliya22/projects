import express from "express"
import { createProductimage, deleteProductImage, getallProductImage, getProductImageById, updateProductImage } from "../controller/productimage.controller.js";
import { upload } from "../middleware/multer.js";

const ProductImageRouter = express.Router();

ProductImageRouter.post("/",upload.single("image"),createProductimage);

ProductImageRouter.route("/")
.get(getallProductImage)
// .post(createProductimage)

ProductImageRouter.route("/:id")
.get(getProductImageById)
.put(updateProductImage)
.delete(deleteProductImage)

export default ProductImageRouter