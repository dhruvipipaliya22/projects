import mongoose from "mongoose";

const CouponProductSchema = new mongoose.Schema({
    couponId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    }
},{timestamps:true});

CouponProductSchema.index({couponId:1,productId:1},{unique:true});

export const CouponProduct =mongoose.model("CouponProduct",CouponProductSchema);