import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    company:{type:String},
    street1:{
        type:String,
        require:true
    },
    street2:{type:String},
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        require:true
    },
    country:{type:String},
    phone:{type:String},
    isDefault:{
        type:Boolean,
        default:false
    },
    type :{
        type:String,
        enum:["SHIPPING","BILLING"],
        default:"SHIPPING"
    }
},{timestamps:true});

export const Address = mongoose.model("Address",addressSchema);