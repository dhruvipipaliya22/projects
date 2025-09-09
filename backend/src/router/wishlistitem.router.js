import express from "express"
import { addWishlistItem, deleteWishlistItem, getWishlistItem, updateWishlistItem } from "../controller/wishlistitem.controller.js";

const WishlistItemRouter = express.Router();


WishlistItemRouter.post("/", addWishlistItem)
WishlistItemRouter.get("/:userId", getWishlistItem)

WishlistItemRouter.route("/:id")
.put(updateWishlistItem)
.delete(deleteWishlistItem)

export default WishlistItemRouter