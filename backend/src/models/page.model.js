import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    content:{type:String},
    seoTitle:{type:String},
    seoDescription:{type:String},
    metaKeywords:{type:String},
    isPublished:{
        type:Boolean,
        default:false
    },
    sortOrder:{
        type:Number,
        default:0
    },
    pageType:{
        type:String,
        enum:["page","policy","about","contact"],
        default:"page"
    }
},{timestamps:true});

PageSchema.index({storeId:1,slug:1},{unique:true});
PageSchema.index({storeId:1});
PageSchema.index({isPublished:1});
PageSchema.index({pageType:1});

export const Page = mongoose.model("Page",PageSchema);