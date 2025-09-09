import { ProductTag } from "../models/producttag.model.js";

export const createProductTag = async(req,res)=>{
    try{
        const{productId, tagId, value}=req.body
        if(!productId || !tagId || !value){
            return res.status(400).json({error:"productid, tagId and value are required"});
        }
        const productTag = new ProductTag({productId, tagId, value});
        await productTag.save();
        res.status(201).json(productTag);
    }catch(err){
        if(err.code === 11000){
            return res.status(400).json({error:"This tag is already assigned to the product"});
        }
        res.status(400).json({error:err.message});
    }
};

export const getAllProductTags = async(req,res)=>{
    try{
        const productTag=await ProductTag.find();
        res.json(productTag);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getProductTagById = async(req,res)=>{
    try{
        const productTag = await ProductTag.findById(req.params.id);
        if(!productTag) return res.status(404).json({error:"ProductTag not found !!"});
        res.json(productTag);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateProductTag = async(req,res)=>{
    try{
        const updated =await ProductTag.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({error:"ProductTag not found !!"});
        res.json(updated)
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteProductTag = async(req,res)=>{
    try{
        const deleted= await ProductTag.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({error:"ProductTag not Found !!"});
        res.json({message:"ProductTag deleted successfully !!!"})
    }catch(err){
        res.status(400).json({error:err.message});
    }
};