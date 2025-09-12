import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{type:String},
    message:{
        type:String,
        required:true
    },
    photoUrl:{type:String},
    rating:{
        type:Number,
        min:1,
        max:5
    },
    position:{type:String},
    company:{type:String},
    isActive:{
        type:Boolean,
        default:true
    },
    displayOrder:{
        type:Number,
        default:0
    }
},{timestamps:true});

TestimonialSchema.index({storeId:1});
TestimonialSchema.index({isActive:1});
TestimonialSchema.index({rating:1});
TestimonialSchema.index({displayOrder:1});

export const Testimonial = mongoose.model("Testimonial",TestimonialSchema);