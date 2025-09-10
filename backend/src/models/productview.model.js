import mongoose from "mongoose";

const ProductViewSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },
    sessionId:{
        type:String,
        default:null
    },
    ipAddress:{
        type:String,
        required:true
    },
    userAgent:{type:String},
    country:{type:String},
    countryCode:{
        type:String,
        maxlength:2
    },
    region:{type:String},
    city:{type:String},
    deviceType:{
        type:String,
        enum:["DESKTOP","MOBILE","TABLET","LAPTOP"],
        default:"MOBILE"
    },
    browser:{type:String},
    os:{type:String},
    referrer:{type:String},
    source:{type:String},
    medium:{type:String},
    campaign:{type:String},
    viewDuration:{
        type:Number,
        default:0
    },
    scrollDepth:{
        type:Number,
        default:0
    }
},{timestamps:{createdAt:true , updatedAt:false}});

ProductViewSchema.index({productId:1,createdAt:-1});
ProductViewSchema.index({storeId:1, createdAt:-1});
ProductViewSchema.index({userId:1});
ProductViewSchema.index({sessionId:1});
ProductViewSchema.index({createdAt:-1});
ProductViewSchema.index({countryCode:1});

export const ProductView =mongoose.model("ProductView",ProductViewSchema);