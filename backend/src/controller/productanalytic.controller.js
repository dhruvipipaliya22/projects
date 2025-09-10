import { ProductAnalytic } from "../models/productanalytic.model.js";

export const createProductAnalytic=async(req,res)=>{
    try{
        const analytic = new ProductAnalytic(req.body);
        await analytic.save();
        res.status(200).json(analytic);
    }catch(err){
        res.status(400).json({message:"Error creating product analytic",error:err.message});
    }
};

export const getProductAnalytics = async (req,res)=>{
    try{
        const analytics = await ProductAnalytic.find().populate("productId");
        res.json(analytics);
    }catch(err){
        res.status(400).json({message:"Error fetching product analytic",error:err.message});
    }
};

export const getProductAnalyticsById=async(req,res)=>{
    try{
        const analytic = await ProductAnalytic.findById(req.params.id).populate("productId");
        if(!analytic) return res.status(404).json({message:"product analytic not found !!"});
        res.json(analytic);
    }catch(err){
        res.status(400).json({message:"Error fetching analytic",error:err.message});
    }
};

export const updateProductAnalytic = async (req,res)=>{
    try{
        const updated =await ProductAnalytic.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"product analytic not found !!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating product analytic",error:err.message});
    }
};

export const deleteProductAnalytic = async(req,res)=>{
    try{
        const deleted= await ProductAnalytic.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"product analytic not found !!"});
        res.json("Product analytic deleted successfully !!");
    }catch(err){
        res.status(400).json({message:"Error deleting product analytic",error:err.message});
    }
};