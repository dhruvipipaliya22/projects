import express from "express"
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from "../controller/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.route("/")
.get(getCategory)
.post(createCategory)

categoryRouter.route("/:id")
.get(getCategoryById)
.put(updateCategory)
.delete(deleteCategory)

export default categoryRouter