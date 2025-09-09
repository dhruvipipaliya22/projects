import express from "express"
import { createReview, deleteReview, getAllReview, getReviewById, updateReview } from "../controller/review.controller.js";

const reviewRouter = express.Router();

reviewRouter.route("/")
.get(getAllReview)
.post(createReview)

reviewRouter.route("/:id")
.get(getReviewById)
.put(updateReview)
.delete(deleteReview)

export default reviewRouter