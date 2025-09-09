import express from "express"
import { createStoreCategory, deleteStoreCtegory, getallStoreCategories, getStoreCategoryById, updateStoreCategory } from "../controller/storecategory.controller.js";

const StoreCategoryRouter = express.Router();

StoreCategoryRouter.route("/")
.get(getallStoreCategories)
.post(createStoreCategory)

StoreCategoryRouter.route("/:id")
.get(getStoreCategoryById)
.put(updateStoreCategory)
.delete(deleteStoreCtegory)

export default StoreCategoryRouter