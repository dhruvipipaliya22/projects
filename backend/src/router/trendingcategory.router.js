import express from "express"
import { createTrendingCategory, deleteTrendingCategory, getTrendingCategories, getTrendingCategoryById, updateTrendingCategory } from "../controller/trendingcategory.controller.js";

const TrendingCategoryRouter = express.Router();

TrendingCategoryRouter.route("/")
.get(getTrendingCategories)
.post(createTrendingCategory)

TrendingCategoryRouter.route("/:id")
.get(getTrendingCategoryById)
.put(updateTrendingCategory)
.delete(deleteTrendingCategory)

export default TrendingCategoryRouter