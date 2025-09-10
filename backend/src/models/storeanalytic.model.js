import mongoose from "mongoose";

export const StoreAnalyticSchema = mongoose.Schema({
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    metric:{
        type:String,
        enum:["REVENUE","ORDERS","VISITORS","CUSTOMERS","CONVERSIONS"],
        required:true
    },
    value:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    }
},{timestamps:true});

StoreAnalyticSchema.index({storeId:1, metric:1, date:1},{unique:true});
StoreAnalyticSchema.index({storeId:1, date:1});
StoreAnalyticSchema.index({metric:1});

export const StoreAnalytic = mongoose.model("StoreAnalytic",StoreAnalyticSchema);