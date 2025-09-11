import { Banner } from "../models/banner.model.js"

export const createBanner = async(req,res)=>{
    try{
        const banner = new Banner(req.body);
        const saved=await banner.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBanner = async(req,res)=>{
    try{
        const banners = await Banner.find();
        res.json(banners);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBannerById = async(req,res)=>{
    try{
        const banner = await Banner.findById(req.params.id);
        if(!banner){
            return res.status(404).json({error:"Banner not found !!"});
        }
        res.json(banner);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateBanner =async (req,res)=>{
    try{
        const update = await Banner.findByIdAndUpdate(req.params.id,res.body,{new:true});
        if(!update){
            return res.status(404).json({error:"Banner not found !!"});
        }
        res.json(update);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteBanner = async(req,res)=>{
    try{
        const deleted = await Banner.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Banner not found !!"});
        }
        res.json({message:"Banner deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};