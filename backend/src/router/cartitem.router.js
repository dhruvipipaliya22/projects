import express from "express"
import { createCartItem, deleteCartItem, getAllCartItems, getCartItemById, updateCartItem } from "../controller/cartitem.controller.js";

const cartItemRouter = express.Router();

cartItemRouter.route("/")
.get(getAllCartItems)
.post(createCartItem)

cartItemRouter.route("/:id")
.get(getCartItemById)
.put(updateCartItem)
.delete(deleteCartItem)

export default cartItemRouter