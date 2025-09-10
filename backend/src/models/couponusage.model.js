import mongoose from "mongoose";

const CouponUsageSchema  = new mongoose.Schema({
    couponId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        default:null
    },
    usedAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

CouponUsageSchema.index({couponId:1});
CouponUsageSchema.index({userId:1});
CouponUsageSchema.index({orderId:1});

export const CouponUsage = mongoose.model("CouponUsage",CouponUsageSchema);