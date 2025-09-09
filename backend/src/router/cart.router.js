import express from "express"
import { createCart, deleteCart, getAllCarts, getCartById, updateCartById } from "../controller/cart.controller.js";

const cartRouter = express.Router();

cartRouter.route("/")
.get(getAllCarts)
.post(createCart)

cartRouter.route("/:id")
.get(getCartById)
.put(updateCartById)
.delete(deleteCart)

export default cartRouter