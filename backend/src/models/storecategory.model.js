import mongoose from "mongoose";

const storecategory = new mongoose.Schema({
    storeId:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    isPrimary:{
        type:Boolean,
        default:false
    },
    displayName:{
        type:String,
        required:true
    },
    description:{type:String},
    imageUrl:{type:String},
    sortOrder:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

export const Storecategory = mongoose.model("Storecategory",storecategory);