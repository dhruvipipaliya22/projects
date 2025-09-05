import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        provider: {
            type: String,
            required: true,
            enum: ["GOOGLE", "GITHUB", "FACEBOOK", "TWITTER", "EMAIL"]
        },
        providerAccountId: {
            type: String,
            required: true
        },
        refreshToken: { type: String },
        accessToken: { type: String },
        expiresAt: { type: Date }
    }, { timestamps: true },
);
accountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });
accountSchema.index({ userId: 1 });

export const Account = mongoose.model("Account", accountSchema)