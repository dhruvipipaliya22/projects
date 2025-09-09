import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    variantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariant",
        default: null
    },
    quantity: {
         type: Number,
        default:1
     },
    priceAtAddition: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required:true
    }
}, { timestamps: true });

cartItemSchema.index({ cartId: 1, productId: 1, variantId: 1 }, { unique: true });
cartItemSchema.index({ cartId: 1 });
cartItemSchema.index({ productId: 1 });
cartItemSchema.index({ variantId: 1 });

export const CartItem = mongoose.model("CartItem", cartItemSchema);