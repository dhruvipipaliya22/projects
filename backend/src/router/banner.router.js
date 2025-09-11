import express from "express";
import { createBanner, deleteBanner, getBanner, getBannerById, updateBanner } from "../controller/banner.controller.js";

const BannerRouter = express.Router();

BannerRouter.route("/")
.get(getBanner)
.post(createBanner)

BannerRouter.route("/:id")
.get(getBannerById)
.put(updateBanner)
.delete(deleteBanner)

export default BannerRouter