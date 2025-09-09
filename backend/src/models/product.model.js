import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: { type: String },
    slug: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    costPrice: { type: Number },
    comparePrice: { type: Number },
    sku: { type: String },
    barcode: { type: String },
    hsnCode: { type: String },
    gst: {
        type: Number,
        min: 0,
        max: 100
    },
    brand: { type: String },
    // stock
    quantity: {
        type: Number,
        default: 0
    },
    trackInventory: {
        type: Boolean,
        default: false
    },
    lowStockThreshold: { type: Number },
    allowBackorder: {
        type: Boolean,
        default: false
    },
    reserved: {
        type: Number,
        default: 0
    },
    // Categories
    parentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    storeCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreCategory",
        required: false
    },
    // Status
    status: {
        type: String,
        enum: ["DRAFT", "PUBLISHED", "ARCHIVED"],
        default: "DRAFT"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    // Ratings
    averageRating: {
        type: Number,
        default: 0
    },
    ratingsCount: {
        type: Number,
        default: 0
    },
    // SEO
    seoTitle: { type: String },
    seoDescription: { type: String },
    metaKeywords: { type: String },
    // Dimensions and weight
    weight: { type: Number },
    length: { type: Number },
    width: { type: Number },
    height: { type: Number }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema)