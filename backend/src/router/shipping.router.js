import express from "express"
import { createShipping, deleteShipping, getShipping, getShippingById, updateShipping } from "../controller/shipping.controller.js";

const ShippingRouter = express.Router();

ShippingRouter.route("/")
.get(getShipping)
.post(createShipping)

ShippingRouter.route("/:id")
.get(getShippingById)
.put(updateShipping)
.delete(deleteShipping)

export default ShippingRouter