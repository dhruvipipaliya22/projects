import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true,
        unique:true
    },
    categoryId:{type:String},
    logo:{type:String},
    isActive:{
        type:Boolean,
        default:true
    },
    ownerId:{
        type:String,
        required:true
    },
    // theme setting
    primaryColor:{
        type:String,
        default:"#4f46e5"
    },
    secondaryColor:{
        type:String,
        default:"#f43f5e"
    },
    fontFamily:{
        type:String,
        default:"'Inter', sans-serif"
    },
    customCss:{type:String}
},{timestamps:true});

export const Store = mongoose.model("Store",storeSchema);