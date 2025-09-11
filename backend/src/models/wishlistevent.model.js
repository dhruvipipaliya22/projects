import mongoose from "mongoose";

const WishlistEventSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    action: {
        type: String,
        enum: ["add", "remove"],
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    userAgent: { type: String },
    country: { type: String },
    countryCode: {
        type: String,
        maxlength: 2
    },
    deviceType:{
        type:String,
        enum:["DESKTOP","MOBILE","TABLET","LAPTOP"],
        default:"DESKTOP"
    },
    browser:{type:String},
    referrer:{type:String},
    source:{type:String},
    medium:{type:String},
    campaign:{type:String},
    daysToPurchase:{type:Number},
    purchased:{
        type:Boolean,
        default:false
    },
    purchaseDate:{type:Date},
    purchaseValue:{type:Number}
},{timestamps:{createdAt:"createAt"}});

export const WishlistEvent = mongoose.model("WishlistEvent",WishlistEventSchema)