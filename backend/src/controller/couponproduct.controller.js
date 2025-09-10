import { CouponProduct } from "../models/couponproduct.model.js"

export const createCouponProduct = async(req,res)=>{
    try{
        const product = new CouponProduct(req.body);
        await product.save();
        res.status(200).json(product)
    }catch(err){
        res.status(400).json({message:"Error creating coupon product !!",error:err.message});
    }
};

export const getCouponProduct = async(req,res)=>{
    try{
        const product = await CouponProduct.find().populate("couponId").populate("productId");
        res.json(product);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon product!!",error:err.message});
    }
};

export const getCouponProductById = async(req,res)=>{
    try{
        const product = await CouponProduct.findById(req.params.id).populate("couponId").populate("productId");
        if(!product) return res.status(404).json({message:"coupon product not found !!"});
        res.json(product);
    }catch(err){
        res.status(400).json({message:"Error fetching coupon product!!",error:err.message});
    }
};

export const deleteCouponProduct = async(req,res)=>{
    try{
        const deleted= await CouponProduct.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"coupon product not found !!"});
        res.json({message:"coupon product deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error deleting coupon product!!",error:err.message});
    }
};