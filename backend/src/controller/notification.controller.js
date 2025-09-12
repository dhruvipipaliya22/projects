import { Notification } from "../models/notification.model.js";

export const createNotification = async(req,res)=>{
    try{
        const notification = new Notification(req.body);
        await notification.save();
        res.status(200).json(notification);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getNotifications = async(req,res)=>{
    try{
        const notifications = await Notification.find().populate("userId").populate("storeId").populate("orderId").populate("productId").sort({createdAt: -1});
        res.json(notifications);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getNotificationById = async(req,res)=>{
    try{
        const notification = await Notification.findById(req.params.id).populate("userId").populate("storeId").populate("orderId").populate("productId").sort({createdAt: -1});
        if(!notification){
            return res.status(404).json({error:"Notification not found !!"});
        }
        res.json(notification);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateNotification = async(req,res)=>{
    try{
        const updated =await Notification.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({error:"Notification not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteNotification = async(req,res)=>{
    try{
        const deleted = await Notification.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Notification not found !!"});
        }
        res.json({message:"Notification deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};