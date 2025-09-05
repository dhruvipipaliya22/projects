import express from "express"
import { createStorefeature, deleteStorefeature, getStorefeature, getStorefeatureById, updateStorefeature } from "../controller/storefeature.controller.js";

const storefeatureRouter = express.Router();

storefeatureRouter.route("/")
.get(getStorefeature)
.post(createStorefeature)

storefeatureRouter.route("/:id")
.get(getStorefeatureById)
.put(updateStorefeature)
.delete(deleteStorefeature)

export default storefeatureRouter