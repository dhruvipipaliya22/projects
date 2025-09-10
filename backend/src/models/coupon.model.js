import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: { type: mongoose.Schema.Types.Decimal128 },
    percentage: { type: mongoose.Schema.Types.Decimal128 },
    minimumOrderAmount: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0
    },
    maximumDiscountAmount: { type: mongoose.Schema.Types.Decimal128 },
    usageLimit: { type: Number },
    usageCount: {
        type: Number,
        default: 0
    },
    usageLimitPerUser: {
        type: Number,
        default: 1
    },
    startDate: {
        type: Date,
        required: true
    },
    enddate: { type: Date },
    isActive: {
        type: Boolean,
        default: true
    },
    applicableProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    applicableCategories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }],
    carts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    }],
    couponUsages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CouponUsage"
    }]
},{timestamps:true});

export const Coupon = mongoose.model("Coupon",CouponSchema);