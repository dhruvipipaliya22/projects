import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    storeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
    },
    type:{
        type:String,
        enum:["order","payment","shipping","promotion","system","review","inventory"],
        required:true
    },
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","SENT","DELIVERED","READ"],
        default:"PENDING"
    },
    priority:{
        type:String,
        enum:["LOW","MEDIUM","HIGH"],
        default:"MEDIUM"
    },
    scheduledAt:{type:Date},
    sentAt:{type:Date},
    deliveredAt:{type:Date},
    readAt:{type:Date},
    // Related entity references
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    // Channel-specific data
    emailSent:{
        type:Boolean,
        default:false
    },
    smsSent:{
        type:Boolean,
        default:false
    },
    pushSent:{
        type:Boolean,
        default:false
    },
    inAppSent:{
        type:Boolean,
        default:false
    },
    // Template and personalization
    templateId:{type:String},
    templateData:{type:String}
},{timestamps:true});

NotificationSchema.index({userId:1});
NotificationSchema.index({storeId:1});
NotificationSchema.index({type:1});
NotificationSchema.index({status:1});
NotificationSchema.index({priority:1});
NotificationSchema.index({scheduledAt:1});
NotificationSchema.index({createdAt:1});
NotificationSchema.index({readAt:1});

export const Notification = mongoose.model("Notification",NotificationSchema);