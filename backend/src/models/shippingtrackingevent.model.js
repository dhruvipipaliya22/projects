import mongoose from "mongoose";

const ShippingTrackingEventSchema = new mongoose.Schema({
    shippingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipping",
        required: true
    },
    status: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    location: { type: String },
    timestamp: {
        type: Date,
        default: Date.now()
    }
},{timestamps:true});

export const ShippingTrackingEvent = mongoose.model("ShippingTrackingEvent",ShippingTrackingEventSchema);