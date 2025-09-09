import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        default:"USD"
    },
    provider:{
        type:String,
        required:true
    },
    providerId:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        enum:["PENDING","SUCCESS","FAILED"],
        required:true
    },
    errorMessage:{type:String},
    // Additional payment details
    paymentMethod:{type:String},
    last4Digits:{type:String},
    brand:{type:String}
},{timestamps:true});

export const Payment=mongoose.model("Payment",paymentSchema);