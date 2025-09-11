import mongoose from "mongoose";

const BannerTargetRoleSchema = new mongoose.Schema({
    bannerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Banner",
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN","SELLER","CUSTOMER"],
        required:true
    }
},{timestamps:true});

BannerTargetRoleSchema.index({bannerId:1, role:1},{unique:true});

export const BannerTargetRole = mongoose.model("BannerTargetRole",BannerTargetRoleSchema);