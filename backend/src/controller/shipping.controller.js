import mongoose from "mongoose";
import { Shipping } from "../models/shipping.model.js";

export const createShipping = async(req,res)=>{
    try{
        const shipping=new Shipping(req.body);
        await shipping.save();
        res.status(200).json(shipping);
    }catch(err){
        res.status(400).json({message:"Error creating Shipping",error:err.message});
    }
};

export const getShipping = async(req,res)=>{
    try{
        const shippings=await Shipping.find().populate("orderId").populate("storeId");
        res.json(shippings);
    }catch(err){
        res.status(400).json({message:"Error fetching Shipping",error:err});
    }
};

export const getShippingById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"Invalid Shipping Id"})
        }
        const shipping=await Shipping.findById(id).populate("orderId").populate("storeId");
        if(!shipping){
            return res.status(404).json("shipping not found !!");
        }
        res.json(shipping);
    }catch(err){
        res.status(400).json({message:"Error fetching shipping", error:err.message})
    }
}

export const updateShipping = async(req,res)=>{
    try{
        const {id} = req.params;
        const updated = await Shipping.findByIdAndUpdate(id, req.body,{new:true});
        if(!updated){
            return res.status(404).json({message:"Shipping not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating Shipping",error:err.message});
    }
};

export const deleteShipping=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Shipping.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message:"Shipping noy found !!"})
        } 
        res.json({message:"Shipping deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error deleting Shipping",error:err.message});
    }
};