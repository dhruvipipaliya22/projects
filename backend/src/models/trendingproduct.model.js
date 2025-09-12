import mongoose from "mongoose";

const TrendingProductSchema =  new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    displayOrder:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

TrendingProductSchema.index({storeId:1,productId:1},{unique:true});
TrendingProductSchema.index({storeId:1});
TrendingProductSchema.index({productId:1});
TrendingProductSchema.index({displayOrder:1});

export const TrendingProduct = mongoose.model("TrendingProduct",TrendingProductSchema);