import express from "express"
import { createShippingMethod, deleteShippingMethod, getShippingMethod, getShippingMethodById, updateShippingMethod } from "../controller/shippingmethod.controller.js";

const shippingmethodRouter = express.Router();

shippingmethodRouter.route("/")
.get(getShippingMethod)
.post(createShippingMethod)

shippingmethodRouter.route("/:id")
.get(getShippingMethodById)
.put(updateShippingMethod)
.delete(deleteShippingMethod)

export default shippingmethodRouter