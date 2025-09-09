import express from "express"
import { createOrderItem, deleteOrderItem, getOrderItemById, getOrderItems, updateOrderItem } from "../controller/orderitem.controller.js";

const orderitemRouter = express.Router();

orderitemRouter.route("/")
.get(getOrderItems)
.post(createOrderItem)

orderitemRouter.route("/:id")
.get(getOrderItemById)
.put(updateOrderItem)
.delete(deleteOrderItem)

export default orderitemRouter