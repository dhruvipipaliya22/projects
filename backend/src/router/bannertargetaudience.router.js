import express from "express";
import { createBannerTargetAudience, deleteBannerTargetAudience, getBannerTargetAudience, getBannerTargetAudienceById, updateBannerTargetAudience } from "../controller/bannertargetaudience.controller.js";

const BannerTargetAudienceRouter = express.Router();

BannerTargetAudienceRouter.route("/")
.get(getBannerTargetAudience)
.post(createBannerTargetAudience)

BannerTargetAudienceRouter.route("/:id")
.get(getBannerTargetAudienceById)
.put(updateBannerTargetAudience)
.delete(deleteBannerTargetAudience)

export default BannerTargetAudienceRouter