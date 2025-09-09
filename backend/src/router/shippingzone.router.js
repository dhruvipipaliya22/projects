import express from "express"
import { createShippingZone, deleteShippingZone, getShippingZone, getShippingZoneById, updateShippingZone } from "../controller/shippingzone.controller.js";

const shippingzoneRouter = express.Router();

shippingzoneRouter.route("/")
.get(getShippingZone)
.post(createShippingZone)

shippingzoneRouter.route("/:id")
.get(getShippingZoneById)
.put(updateShippingZone)
.delete(deleteShippingZone)

export default shippingzoneRouter