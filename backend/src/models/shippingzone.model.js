import mongoose from "mongoose";

const ShippingZoneSchema = new mongoose.Schema({
    shippingMethodId:{
        type:mongoose.Schema.Types.String,
        ref:"ShippingMethode",
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{type:String},
    city:{type:String},
    postalCode:{type:String}
},{timestamps:true});

export const ShippingZone = mongoose.model("shippingzone",ShippingZoneSchema);