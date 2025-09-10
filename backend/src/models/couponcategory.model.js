import mongoose from "mongoose";

const CouponCategorySchema = new mongoose.Schema({
    couponId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    }
},{timestamps:true});

CouponCategorySchema.index({couponId:1,categoryId:1},{unique:true});

export const CouponCategory = mongoose.model("CouponCategory",CouponCategorySchema);