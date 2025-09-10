import express from "express"
import { createCoupon, deleteCoupon, getCoupon, getCouponById, updateCoupon } from "../controller/coupon.controller.js";

const CouponRouter = express.Router();

CouponRouter.route("/")
.get(getCoupon)
.post(createCoupon)

CouponRouter.route("/:id")
.get(getCouponById)
.put(updateCoupon)
.delete(deleteCoupon)

export default CouponRouter