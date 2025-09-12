import { TrendingProduct } from "../models/trendingproduct.model.js";

export const createTrendingProduct = async(req,res)=>{
    try{
        const trendingproduct = await TrendingProduct(req.body);
        await trendingproduct.save();
        res.status(200).json(trendingproduct);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getTrendingProducts = async(req,res)=>{
    try{
        const trendingproducts = await TrendingProduct.find().populate("storeId").populate("productId").sort({displayOrder:1});
        res.json(trendingproducts);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getTrendingProductById = async(req,res)=>{
    try{
        const trendingproduct =await TrendingProduct.findById(req.params.id).populate("storeId").populate("productId");
        if(!trendingproduct){
            return res.status(404).json({error:"Trending Product not found !!"});
        }
        res.json(trendingproduct);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateTrendingProduct = async(req,res)=>{
    try{
        const updated = await TrendingProduct.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!updated){
            return res.status(404).json({error:"Trending Product not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteTrendingProduct = async(req,res)=>{
    try{
        const deleted = await TrendingProduct.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Trending Product not found !!"});
        }
        res.json({message:"Trending Product deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};