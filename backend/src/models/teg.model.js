import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    type:{
        type:String,
        enum:["text","number","boolean","color","size"],
        default:"text"
    },
    category:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true});

export const Tag = mongoose.model("Tag",tagSchema);