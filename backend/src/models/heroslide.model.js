import mongoose from "mongoose";

const HeroSlideSchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    mobileImageUrl:{type:String},
    title:{type:String},
    subtitle:{type:String},
    description:{type:String},
    linkUrl:{type:String},
    linkText:{type:String},
    displayOrder:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

HeroSlideSchema.index({storeId:1});
HeroSlideSchema.index({isActive:1});
HeroSlideSchema.index({displayOrder:1});

export const HeroSlide = mongoose.model("HeroSlide",HeroSlideSchema);