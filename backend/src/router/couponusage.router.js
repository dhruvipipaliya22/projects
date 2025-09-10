import express from "express"
import { createCouponUsage, deleteCouponUsage, getCouponUsage, getCouponUsageById } from "../controller/couponusage.controller.js";

const CouponUsageRouter = express.Router();

CouponUsageRouter.route("/")
.get(getCouponUsage)
.post(createCouponUsage)

CouponUsageRouter.route("/:id")
.get(getCouponUsageById)
.delete(deleteCouponUsage)

export default CouponUsageRouter