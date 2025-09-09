import mongoose from "mongoose";

const reviewSchma = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    title:{type:String},
    comment:{type:String},
    status:{
        type:String,
        enum:["PENDING","APPROVED","REJECTED"],
        default:"PENDING",
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    helpfulcount:{
        type:Number,
        default:0
    }
},{timestamps:true});

reviewSchma.index({productId:1,userId:1},{unique:true});
reviewSchma.index({productId:1});
reviewSchma.index({userId:1});
reviewSchma.index({rating:1});
reviewSchma.index({status:1});
reviewSchma.index({createAt:1});

export const Review = mongoose.model("Review",reviewSchma);