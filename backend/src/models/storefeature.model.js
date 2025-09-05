import mongoose from "mongoose";

const storefeature = new mongoose.Schema({
    storeId: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Storefeature = mongoose.model("Storefeature",storefeature);