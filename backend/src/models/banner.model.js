import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    storeId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{type:String},
    imageUrl:{
        type:String,
        require:true
    },
    mobileImageUrl:{type:String},
    linkUrl:{type:String},
    linkText:{type:String},
    position:{
        type:String,
        enum:["TOP","MIDDLE","BOTTOM"],
        required:true
    },
    displayOrder:{
        type:Number,
        default:0
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{type:Date},
    isAlwaysActive:{
        type:Boolean,
        default:false
    },
    backgroundColor:{type:String},
    textColor:{type:String},
    buttonColor:{type:String},
    overlayOpacity:{
        type:Number,
        min:0,
        max:1
    },
    impressions:{
        type:Number,
        default:0
    },
    clicks:{
        type:Number,
        default:0
    },
    conversionRate:{
        type:Number,
        default:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

BannerSchema.pre("save",function(next){
    this.updatedAt = Date.now();
    next();
});

export const Banner = mongoose.model("Banner",BannerSchema);