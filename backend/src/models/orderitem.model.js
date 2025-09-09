import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.String,
        ref:"Order",
        required:true
    },
    productId: {
        type: mongoose.Schema.Types.String,
        ref: "Product",
        required: true
    },
    variantId: {
        type: mongoose.Schema.Types.String,
        ref: "Productvariant",
        required: true
    },
    // Snapshot data at time of order
    title: {
        type:String,
        required:true
    },
    sku: {type: String},
    price:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    // Product details at time of order
    productImage:{type:String},
    variantColor:{type:String},
    variantSize:{type:String}
},{timestamps:true});

export const OrderItem=mongoose.model("OrderItem",orderitemSchema);