import mongoose from "mongoose";

const productimageSchema = new mongoose.Schema({
    productId: {
        type: String,
        ref: "Product",
        required: true
    },
    url: {
        type: String,
        required: true
    },
    altText: { type: String },
    width: { type: Number },
    height: { type: Number },
    fileSize: { type: Number },
    order: {
        type: Number,
        default: 0
    },
    isMainImage:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

export const ProductImage = mongoose.model("ProductImage", productimageSchema)