import mongoose from "mongoose";

const SessionTrackingSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        unique: true
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    region:{type:String},
    city:{type:String},
    timezone:{type:String},
    deviceType:{
        type:String,
        enum:["DESKTOP","MOBILE","TABLET","LAPTOP"],
        default:"DESKTOP"
    },
    browser:{type:String},
    os:{type:String},
    screenResolution:{type:String},
    referrer:{type:String},
    source:{type:String},
    medium:{type:String},
    campaign:{type:String},
    sessionDuration:{
        type:Number,
        default:0
    },
    isBounce:{
        type:Boolean,
        default:false
    },
    sessionStart:{
        type:Date,
        default:Date.now
    },
    sessionEnd:{
        type:Date,
        default:null
    },
    isActive:{
        type:Boolean,
        default:true
    },
    pagesVisited:{
        type:Number,
        default:0
    },
    conversionValue:{
        type:Number,
        default:0
    }
},{timestamps:true});

export const SessionTracking = mongoose.model("SessionTracking",SessionTrackingSchema);