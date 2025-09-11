import express from "express";
import { createWishlistEvent, deleteWishlistEvent, getWishlistEvent, getWishlistEventById, updateWishlistEvent } from "../controller/wishlistevent.controller.js";

const WishlistEventRouter = express.Router();

WishlistEventRouter.route("/")
.get(getWishlistEvent)
.post(createWishlistEvent)

WishlistEventRouter.route("/:id")
.get(getWishlistEventById)
.put(updateWishlistEvent)
.delete(deleteWishlistEvent)

export default WishlistEventRouter