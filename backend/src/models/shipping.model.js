import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
        unique: true
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        require: true
    },
    shippingMethodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShippingMethod",
        required: true
    },
    trackingNumber: {
        type: String,
        unique: true,
        sparse: true
    },
    carrier:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","SHIPPED","DELIVERED","CANCELLED"],
        default:"PENDING"
    },
    cost:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    weight:{type:Number},
    length:{type:Number},
    width:{type:Number},
    height:{type:Number},
    shippedAt:{type:Date},
    deliveredAt:{type:Date},
    estimatedDelivery:{type:Date}
},{timestamps:true});

export const Shipping = mongoose.model("Shipping",shippingSchema);