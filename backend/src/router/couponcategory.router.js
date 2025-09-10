import express from "express"
import { createCouponCategory, deleteCouponCategory, getCouponCategory, getCouponCategoryById } from "../controller/couponcategory.controller.js";

const CouponCategoryRouter = express.Router();

CouponCategoryRouter.route("/")
.get(getCouponCategory)
.post(createCouponCategory)

CouponCategoryRouter.route("/:id")
.get(getCouponCategoryById)
.delete(deleteCouponCategory)

export default CouponCategoryRouter