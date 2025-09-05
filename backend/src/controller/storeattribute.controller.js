import { StoreAttribute } from "../models/storeattribute.model.js"

export const createStoreAttribute = async(req,res)=>{
    try{
        const attribute=await StoreAttribute.create(req.body);
        res.status(201).json({success:true,data:attribute});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStoreAttributes = async(req,res)=>{
    try{
        const attributes=await StoreAttribute.find().populate("storeId");
        res.json({success:true,data:attributes});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStoreAttributesById = async(req,res)=>{
    try{
        const attribute= await StoreAttribute.findById().populate("storeId");
        if(!attribute) return res.status(404).json({success:false,message:"Attribute not found !!"});
        res.json({success:true,data:attribute});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const updateStoreAttribute=async(req,res)=>{
    try{
        const attribute=await StoreAttribute.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({success:true,data:attribute});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const deleteStoreAttribute=async(req,res)=>{
    try{
        const attribute = await StoreAttribute.findByIdAndDelete(req.params.id);
        res.json({success:true,message:"Attribute deleted successfully !!!"});
    }catch(err){
        res.json(400).json({success:false,message:err.message})
    }
};