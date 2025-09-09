import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        unique: true
    },
    storeId: {
        type: mongoose.Schema.Types.String,
        ref: "Store",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.String,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"],
        default: "PENDING"
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "PAID", "FAILED", "REFUNDED"],
        default: "PENDING"
    },
    // Amounts using Decimal for precise currency calculations
    subtotal:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    taxTotal:{
        type:mongoose.Schema.Types.Decimal128,
        default:0
    },
    shippingTotal:{
        type:mongoose.Schema.Types.Decimal128,
        default:0
    },
    discountTotal:{
        type:mongoose.Schema.Types.Decimal128,
        default:0
    },
    total:{
        type:mongoose.Schema.Types.Decimal128,
        require:true
    },
    currency:{
        type:String,
        default:"USD"
    },
    // Separate shipping and billing addresses for better querying
    shippingFirstName:{
        type:String,
        required:true
    },
    shippingLastName:{
        type:String,
        required:true
    },
    shippingCompany:{type:String},
    shippingStreet1:{
        type:String,
        required:true
    },
    shippingStreet2:{type:String},
    shippingCity:{
        type:String,
        required:true
    },
    shippingState:{
        type:String,
        required:true
    },
    shippingPostal:{
        type:String,
        required:true
    },
    shippingCountry:{
        type:String,
        required:true
    },
    shippingPhone:{type:String},
    billingFirstName:{type:String},
    billingLastName:{type:String},
    billingCompany:{type:String},
    billingStreet1:{type:String},
    billingStreet2:{type:String},
    billingCity:{type:String},
    billingState:{type:String},
    billingPostal:{type:String},
    billingCountry:{type:String},
    billingPhone:{type:String},
    // Shipping
    shippingMethodName:{type:String},
    trackingNumber:{type:String},
    // Payment
    paymentId:{type:String},
    paidAt:{type:Date},
    // Relations
    notes:{type:String}
},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema);