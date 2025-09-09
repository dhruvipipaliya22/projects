import mongoose from "mongoose";

const ShippingMethodSchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.String,
        ref:"Store",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{type:String},
    type:{
        type:String,
        enum:["STANDARD","EXPRESS","OVERNIGHT"],
        required:true
    },
    baseCost:{
        type:Number,
        required:true
    },
    costPerKg:{type:String},
    costPerKm:{type:String},
    freeShippingThreshold:{type:String},
    minDays:{
        type:Number,
        required:true
    },
    maxDays:{
        type:Number,
        required:true
    },
    maxWeight:{type:Number},
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

export const ShippingMethod = mongoose.model("ShippingMethod",ShippingMethodSchema);