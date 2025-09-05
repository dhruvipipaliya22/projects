import express from "express"
import { createStoreAttribute, deleteStoreAttribute, getStoreAttributes, getStoreAttributesById, updateStoreAttribute } from "../controller/storeattribute.controller.js";

const storeattributeRouter = express.Router();

storeattributeRouter.route("/")
.get(getStoreAttributes)
.post(createStoreAttribute)

storeattributeRouter.route("/:id")
.get(getStoreAttributesById)
.put(updateStoreAttribute)
.delete(deleteStoreAttribute)

export default storeattributeRouter