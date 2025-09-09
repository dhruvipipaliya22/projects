import express from "express"
import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controller/order.controller.js";

const orderRouter = express.Router();

orderRouter.route("/")
.get(getOrders)
.post(createOrder)

orderRouter.route("/:id")
.get(getOrderById)
.put(updateOrder)
.delete(deleteOrder)

export default orderRouter