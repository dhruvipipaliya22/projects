import mongoose from "mongoose";

const whishlistitemSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.String,
        ref:"User",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.String,
        ref:"Product",
        required:true
    },
    storeId:{
        type:mongoose.Schema.Types.String,
        ref:"Store",
        required:true
    },
    note:{type:String},
},{timestamps:true});

whishlistitemSchema.index({userId:1,productId:1},{unique:true});

export const WishlistItem = mongoose.model("WishlistItem",whishlistitemSchema);