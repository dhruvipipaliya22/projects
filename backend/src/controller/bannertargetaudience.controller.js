import { BannerTargetAudience } from "../models/bannertargetaudience.model.js";

export const createBannerTargetAudience = async(req,res)=>{
    try{
        const audience = new BannerTargetAudience(req.body);
        const saved = await audience.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBannerTargetAudience = async(req,res)=>{
    try{
        const audiences = await BannerTargetAudience.find().populate("bannerId");
        res.json(audiences);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBannerTargetAudienceById = async(req,res)=>{
    try{
        const audience = await BannerTargetAudience.findById(req.params.id).populate("bannerId");
        if(!audience){
            return res.status(404).json({error:"Banner Target Audience not found !!"});
        }
        res.json(audience);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateBannerTargetAudience =async(req,res)=>{
    try{
        const update = await BannerTargetAudience.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({error:"Banner Target Audience not found !!"});
        }
        res.json(update);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteBannerTargetAudience = async(req,res)=>{
    try{
        const deleted = await BannerTargetAudience.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Banner Target Audience not found !!"});
        }
        res.json({message:"Banner Target Audience deleted successfully !!!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};