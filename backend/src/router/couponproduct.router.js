import express from "express"
import { createCouponProduct, deleteCouponProduct, getCouponProduct, getCouponProductById } from "../controller/couponproduct.controller.js";

const CouponProductRouter = express.Router();

CouponProductRouter.route("/")
.get(getCouponProduct)
.post(createCouponProduct)

CouponProductRouter.route("/:id")
.get(getCouponProductById)
.delete(deleteCouponProduct)

export default CouponProductRouter