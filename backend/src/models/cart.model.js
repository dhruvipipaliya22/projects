import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    couponId:{type:String},
    sessionId:{type:String},
    expiresAt:{
        type:Date,
        required:true
    },
    itemCount:{
        type:Number,
        default:0
    },
    subtotal:{
        type:Number,
        default:0
    },
    total:{
        type:Number,
        default:0
    }
},{timestamps:true});

cartSchema.index({userId:1});
cartSchema.index({storeId:1});
cartSchema.index({sessionId:1});
cartSchema.index({expiresAt:1});

export const Cart= mongoose.model("Cart",cartSchema);