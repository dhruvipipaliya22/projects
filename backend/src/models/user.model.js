import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true
    },
    phoneVerified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        default: null
    },
    profileUrl: {
        type: String,
        default: true
    },
    role: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        default: "LOCAL"
    },
    address: { type: String },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: { type: Date },
    refreshToken: { type: String },
    loginAttempts: {
        type: Number,
        default: 0
    },
    lockedUntil: { type: Date },
    twoFactorEnabled: {
        type: Boolean,
        default: false
    },
    twoFactorSecret: { type: String },
    emailVerificationOtp: { type: String },
    emailVerificationExpires: { type: Date },
    passwordResetOtp: { type: String },
    passwordResetExpires: { type: Date },
    // Preferences
    notificationEmail: {
        type: Boolean,
        default: true
    },
    notificationSms: {
        type: Boolean,
        default: false
    },
    notificationPush: {
        type: Boolean,
        default: true
    },
    language: {
        type: String,
        default: "english"
    },
    currency: {
        type: String,
        default: "USD"
    },
    timezone: {
        type: String,
        default: "UTC"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)