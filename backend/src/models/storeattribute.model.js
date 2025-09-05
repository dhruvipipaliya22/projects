import mongoose from "mongoose";

const storeAttributeSchema = new mongoose.Schema({
    storeId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        index:true
    },
    value:{
        type:String,
        required:true
    }
},{timestamps:true})

export const StoreAttribute = mongoose.model("StoreAttribute",storeAttributeSchema);