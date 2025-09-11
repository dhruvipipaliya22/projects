import { BannerTargetRole } from "../models/bannertargetrole.model.js"

export const createBannerTargetRole = async(req,res)=>{
    try{
        const role = new BannerTargetRole(req.body);
        const saved = await role.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBannerTargetRole = async(req,res)=>{
    try{
        const roles = await BannerTargetRole.find().populate("bannerId");
        res.json(roles);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getBannerTargetRoleById = async(req,res)=>{
    try{
        const role = await BannerTargetRole.findById(req.params.id).populate("bannerId");
        if(!role){
            return res.status(404).json({error:"Banner Target Role not found !!"});
        }
        res.json(role);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateBannerTargetRole =async(req,res)=>{
    try{
        const update = await BannerTargetRole.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({error:"Banner Target Role not found !!"});
        }
        res.json(update);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteBannerTargetRole = async(req,res)=>{
    try{
        const deleted = await BannerTargetRole.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Banner Target Role not found !!"});
        }
        res.json({message:"Banner Target Role deleted successfully !!!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};