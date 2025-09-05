import { Category } from "../models/category.model"

export const createCategory = async(req,res)=>{
    try{
        const category = await Category.create(req.body);
        res.status(201).json({success:true,data:category});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getCategory = async(req,res)=>{
    try{
        const categories = await Category.find();
        res.json({success:true,data:categories});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getCategoryById =async(req,res)=>{
    try{
        const category=await Category.findById(req.params.id);
        if(!category) return res.status(400).json({success:false,message:"Category not found !!"});
        res.json({success:true,data:category});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const updateCategory = async(req,res)=>{
    try{
        const category=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!category) return res.status(404).json({success:false,message:"Category not found !!"});
        res.json({success:true,data:category});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
}