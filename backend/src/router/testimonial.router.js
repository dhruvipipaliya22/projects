import express from "express"
import { createTestimonial, deleteTestimonial, getTestimonial, getTestimonialById, updateTestimonial } from "../controller/testimonial.controller.js";

const TestimonialRouter = express.Router();

TestimonialRouter.route("/")
.get(getTestimonial)
.post(createTestimonial)

TestimonialRouter.route("/:id")
.get(getTestimonialById)
.put(updateTestimonial)
.delete(deleteTestimonial)

export default TestimonialRouter