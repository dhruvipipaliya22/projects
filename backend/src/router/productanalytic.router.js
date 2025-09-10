import express from "express"
import { createProductAnalytic, deleteProductAnalytic, getProductAnalytics, getProductAnalyticsById, updateProductAnalytic } from "../controller/productanalytic.controller.js";

const ProductAnalyticRouter = express.Router();

ProductAnalyticRouter.route("/")
.get(getProductAnalytics)
.post(createProductAnalytic)

ProductAnalyticRouter.route("/:id")
.get(getProductAnalyticsById)
.put(updateProductAnalytic)
.delete(deleteProductAnalytic)

export default ProductAnalyticRouter