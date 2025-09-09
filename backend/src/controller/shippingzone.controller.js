import mongoose from "mongoose";
import { ShippingZone } from "../models/shippingzone.model.js";

export const createShippingZone = async(req,res)=>{
    try{
        const zone= new ShippingZone(req.body);
        await zone.save();
        res.status(201).json(zone);
    }catch(err){
        res.status(400).json({message:"Error creating shipping zone",error:err.message});
    }
};

export const getShippingZone = async(req,res)=>{
    try{
        const zones=await ShippingZone.find();
        res.json(zones);
    }catch(err){
        res.status(400).json({message:"Error fetching shipping zones",error:err.message});
    }
};

export const getShippingZoneById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"Invalid shipping zone Id"});
        }
        const zone = await ShippingZone.findById(id).populate("shippingmethodeId");
        if(!zone) return res.status(404).json({message:"Shipping Zone not found !!"});
        res.json(zone);
    }catch(err){
        res.status(400).json({message:"Error fetching shipping zones",error:err.message});
    }
};

export const updateShippingZone = async(req,res)=>{
    try{
        const {id}=req.params;
        const updated = await ShippingZone.findByIdAndUpdate(id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"Shipping zone not found !!!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating shipping zone",error:err.message});
    }
};

export const deleteShippingZone = async (req,res)=>{
    try{
        const {id}=req.params;
        const deleted = await ShippingZone.findByIdAndDelete(id);
        if(!deleted) return res.status(404).json({message:"Shipping Zone note found !!"});
        res.json({message:"Shipping Zone deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error updating shipping zone",error:err.message})
    }
}