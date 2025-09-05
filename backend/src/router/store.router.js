import express from "express"
import { createStore, deleteStore, getStore, getStoreById, updateStore } from "../controller/store.controller.js";

const storeRouter = express.Router();

storeRouter.route("/")
.get(getStore)
.post(createStore)

storeRouter.route("/:id")
.get(getStoreById)
.put(updateStore)
.delete(deleteStore)

export default storeRouter