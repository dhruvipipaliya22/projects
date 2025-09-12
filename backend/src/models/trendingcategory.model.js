import mongoose from "mongoose";

const TrendingCategorySchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
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

TrendingCategorySchema.index({storeId:1, categoryId:1},{unique:true});
TrendingCategorySchema.index({storeId:1});
TrendingCategorySchema.index({categoryId:1});
TrendingCategorySchema.index({displayOrder:1});

export const TrendingCategory = mongoose.model("TrendingCategory",TrendingCategorySchema);