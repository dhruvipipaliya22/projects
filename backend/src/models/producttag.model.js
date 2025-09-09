import mongoose from "mongoose";

const productTagSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    tagId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
        required:true
    },
    value:{
        type:String,
        required:true
    }
},{timestamps:true});

productTagSchema.index({productId:1,tagId:1},{unique:true});
productTagSchema.index({productId:1});
productTagSchema.index({tagId:1});
productTagSchema.index({value:1});

export const ProductTag=mongoose.model("ProductTag",productTagSchema);