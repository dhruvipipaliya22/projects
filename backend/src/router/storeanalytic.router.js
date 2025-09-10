import express from "express"
import { createStoreAnalytic, deleteStoreAnalytic, getStoreAnalytics, updateStoreAnalytic } from "../controller/storeanalytic.controller.js";

const StoreAnalyticRouter = express.Router();

StoreAnalyticRouter.route("/")
.get(getStoreAnalytics)
.post(createStoreAnalytic)

StoreAnalyticRouter.route("/:id")
.put(updateStoreAnalytic)
.delete(deleteStoreAnalytic)

export default StoreAnalyticRouter