import { TrendingCategory } from "../models/trendingcategory.model.js";

export const createTrendingCategory = async(req,res)=>{
    try{
        const trendingcategory = await TrendingCategory.create(req.body);
        res.status(200).json(trendingcategory);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getTrendingCategories = async(req,res)=>{
    try{
        const trendingcategories = await TrendingCategory.find().populate("storeId").populate("categoryId").sort({displayOrder:1});
        res.json(trendingcategories);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getTrendingCategoryById = async(req,res)=>{
    try{
        const trendingcategory = await TrendingCategory.findById(req.params.id).populate("storeId").populate("categoryId");
        if(!trendingcategory){
            return res.status(404).json({error:"Trending Category not found !!"});
        }
        res.json(trendingcategory);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateTrendingCategory = async(req,res)=>{
    try{
        const updated =await TrendingCategory.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!updated){
            return res.status(404).json({error:"Trending Category not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteTrendingCategory = async(req,res)=>{
    try{
        const deleted = await TrendingCategory.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Trending Category not found !!"});
        }
        res.json({message:"Trending Category deleted successfully !!"})
    }catch(err){
        res.status(400).json({error:err.message});
    }
};