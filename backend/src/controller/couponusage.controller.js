import { CouponUsage } from "../models/couponusage.model.js"

export const createCouponUsage = async(req,res)=>{
    try{
        const usage = new CouponUsage(req.body);
        await usage.save();
        res.status(201).json(usage);
    }catch(err){
        res.status(400).json({message:"Error creating coupon usage",error:err.message});
    }
};

export const getCouponUsage=async(req,res)=>{
    try{
        const usages=await CouponUsage.find().populate("couponId").populate("userId").populate("orderId");
        res.json(usages);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon usage",error:err.message});
    }
};

export const getCouponUsageById = async(req,res)=>{
    try{
        const usage = await CouponUsage.findById(req.params.id).populate("couponId").populate("userId").populate("orderId");
        if(!usage) return res.status(404).json({message:"Coupon usage not found !!!"});
        res.json(usage);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon usage",error:err.message});
    }
};

export const deleteCouponUsage = async(req,res)=>{
    try{
        const deleted=await CouponUsage.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"Coupon usage not found !!!"});
        res.json({message:"Coupon Usage deleted successfully !!!"});
    }catch(err){
         res.status(400).json({message:"Error deleting coupon usage",error:err.message});
    }
}