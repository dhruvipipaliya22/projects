import express from "express";
import { createBannerTargetRole, deleteBannerTargetRole, getBannerTargetRole, getBannerTargetRoleById, updateBannerTargetRole } from "../controller/bannertargetrole.controller.js";

const BannerTargetRoleRouter = express.Router();

BannerTargetRoleRouter.route("/")
.get(getBannerTargetRole)
.post(createBannerTargetRole)

BannerTargetRoleRouter.route("/:id")
.get(getBannerTargetRoleById)
.put(updateBannerTargetRole)
.delete(deleteBannerTargetRole)

export default BannerTargetRoleRouter