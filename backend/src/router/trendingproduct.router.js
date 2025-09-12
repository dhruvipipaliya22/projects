import express from "express"
import { createTrendingProduct, deleteTrendingProduct, getTrendingProductById, getTrendingProducts, updateTrendingProduct } from "../controller/trendingproduct.controller.js";

const TrendingProductRouter = express.Router();

TrendingProductRouter.route("/")
.get(getTrendingProducts)
.post(createTrendingProduct)

TrendingProductRouter.route("/:id")
.get(getTrendingProductById)
.put(updateTrendingProduct)
.delete(deleteTrendingProduct)

export default TrendingProductRouter