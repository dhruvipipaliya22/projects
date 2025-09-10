import { CouponCategory } from "../models/couponcategory.model.js";

export const createCouponCategory = async(req,res)=>{
    try{
        const product = new CouponCategory(req.body);
        await product.save();
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({message:"Error creating coupon category !!",error:err.message});
    }
};

export const getCouponCategory = async(req,res)=>{
    try{
        const product = await CouponCategory.find().populate("couponId").populate("categoryId");
        res.json(product);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon category!!",error:err.message});
    }
};

export const getCouponCategoryById = async(req,res)=>{
    try{
        const product = await CouponCategory.findById(req.params.id).populate("couponId").populate("caregoryId");
        if(!product) return res.status(404).json({message:"coupon category not found !!"});
        res.json(product);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon category!!",error:err.message});
    }
};

export const deleteCouponCategory = async(req,res)=>{
    try{
        const deleted= await CouponCategory.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"coupon category not found !!"});
        res.json({message:"coupon category deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error deleting coupon category!!",error:err.message});
    }
};