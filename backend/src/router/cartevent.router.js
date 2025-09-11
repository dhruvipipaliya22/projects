import express from "express"
import { createCartEvent, deleteCartEvent, getCartEvent, getCartEventById, updateCartEvent } from "../controller/cartevent.controller.js";

const CartEventRouter = express.Router();

CartEventRouter.route("/")
.get(getCartEvent)
.post(createCartEvent)

CartEventRouter.route("/:id")
.get(getCartEventById)
.put(updateCartEvent)
.delete(deleteCartEvent)

export default CartEventRouter