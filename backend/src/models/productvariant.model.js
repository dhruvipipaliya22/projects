import mongoose from "mongoose";

const ProductVariantSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    sku:{
        type:String,
        unique:true,
        sparse:true
    },
    price:{type:Number},
    comparePrice:{type:Number},
    costPrice:{type:Number},
    quantity:{
        type:Number,
        default:0
    },
    // Individual attribute columns for better performance
    color:{type:String},
    size:{type:String},
    material:{type:String},
    style:{type:String}
},{timestamps:true});

export const ProductVariant =  mongoose.model("ProductVariant",ProductVariantSchema);