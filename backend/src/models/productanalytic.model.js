import mongoose from "mongoose";

const productAnalyticSchema =new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    metric:{
        type:String,
        enum:["VIEWS","CART_ADDS","PURCHASES","WISHLIST"],
        required:true
    },
    count:{
        type:Number,
        default:0
    }
},{timestamps:true});

productAnalyticSchema.index({productId:1,metric:1,date:1},{unique:true});
productAnalyticSchema.index({productId:1,date:1});
productAnalyticSchema.index({metric:1});

export const ProductAnalytic =mongoose.model("ProductAnalytic",productAnalyticSchema)