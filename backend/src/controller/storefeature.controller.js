import { Storefeature } from "../models/storefeature.model.js"

export const createStorefeature = async(req,res)=>{
    try{
        const feature = await Storefeature.create(req.body);
        res.status(200).json({success:true,data:feature});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStorefeature = async(req,res)=>{
    try{
        const features = await Storefeature.find().populate("storeId");
        res.json({success:true,data:features});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStorefeatureById=async(req,res)=>{
    try{
        const feature = await Storefeature.findById(req.params.id).populate("storeId");
        if(!feature) return res.status(404).json({success:false,message:"Feature not found"});
        res.json({success:true,data:feature});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const updateStorefeature = async(req,res)=>{
    try{
        const feature=await Storefeature.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({success:true,data:feature});
    }catch(err){
        res.status(400).json({success:false,message:err.message});  
    }
};

export const deleteStorefeature = async(req,res)=>{
    try{
        const feature=await Storefeature.findByIdAndDelete(req.params.id);
        res.json({success:true,data:feature});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};