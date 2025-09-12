import express from "express"
import { createHeroSlide, deleteHeroSlider, getHeroSlideById, getHeroSlides, updateHeroSlider } from "../controller/heroslide.controller.js";

const HeroSlideRouter = express.Router();

HeroSlideRouter.route("/")
.get(getHeroSlides)
.post(createHeroSlide)

HeroSlideRouter.route("/:id")
.get(getHeroSlideById)
.put(updateHeroSlider)
.delete(deleteHeroSlider)

export default HeroSlideRouter