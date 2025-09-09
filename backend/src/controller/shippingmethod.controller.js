import mongoose from "mongoose";
import { ShippingMethod } from "../models/shippingmethod.model.js";

export const createShippingMethod = async(req,res)=>{
    try{
        const method=new ShippingMethod(req.body);
        await method.save();
        res.status(200).json(method);
    }catch(err){
        res.status(400).json({message:"Error creating shipping method",error:err.message});
    }
};

export const getShippingMethod = async(req,res)=>{
    try{
        const methods=await ShippingMethod.find().populate("storeId");
        res.json(methods);
    }catch(err){
        res.status(400).json({message:"Error fetching shipping method",error:err.message});
    }
};

export const getShippingMethodById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"Invalid shipping method Id"})
        }
        const method=await ShippingMethod.findById(id).populate("storeId");
        if(!method){
            return res.status(404).json("shipping method not found !!");
        }
        res.json(method);
    }catch(err){
        res.status(400).json({message:"Error fetching shipping method", error:err.message})
    }
}

export const updateShippingMethod = async(req,res)=>{
    try{
        const {id} = req.params;
        const updated = await ShippingMethod.findByIdAndUpdate(id, req.body,{new:true});
        if(!updated){
            return res.status(404).json({message:"shipping method not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating shipping method",error:err.message});
    }
};

export const deleteShippingMethod=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await ShippingMethod.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message:" shipping method noy found !!"})
        } 
        res.json({message:" shipping method deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error deleting  shipping method",error:err.message});
    }
};