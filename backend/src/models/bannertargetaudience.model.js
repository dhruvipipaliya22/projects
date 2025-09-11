import mongoose from "mongoose";

const BannerTargetAudienceSchema = new mongoose.Schema({
    bannerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Banner",
        required:true
    },
    audienceType:{
        type:String,
        required:true
    },
    audienceValue:{type:String}
},{timestamps:true});

BannerTargetAudienceSchema.index({bannerId:1,audienceType:1},{unique:true});

export const BannerTargetAudience = mongoose.model("BannerTargetAudience",BannerTargetAudienceSchema);