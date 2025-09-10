import { StoreAnalytic } from "../models/storeanalytic.model.js";

export const createStoreAnalytic=async(req,res)=>{
    try{
        const analytic = new StoreAnalytic(req.body);
        await analytic.save();
        res.status(200).json(analytic);
    }catch(err){
        res.status(400).json({message:"Error creating store analytic",error:err.message});
    }
};

export const getStoreAnalytics = async (req,res)=>{
    try{
        const analytics = await StoreAnalytic.find().populate("storeId");
        res.json(analytics);
    }catch(err){
        res.status(400).json({message:"Error fetching store analytic",error:err.message});
    }
};

export const updateStoreAnalytic = async (req,res)=>{
    try{
        const updated =await StoreAnalytic.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"store analytic not found !!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating store analytic",error:err.message});
    }
};

export const deleteStoreAnalytic = async(req,res)=>{
    try{
        const deleted= await StoreAnalytic.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"store analytic not found !!"});
        res.json("Store analytic deleted successfully !!");
    }catch(err){
        res.status(400).json({message:"Error deleting store analytic",error:err.message});
    }
};