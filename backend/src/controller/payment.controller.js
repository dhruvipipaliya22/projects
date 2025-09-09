import mongoose from "mongoose";
import { Payment } from "../models/payment.model.js"

export const createPayment = async(req,res)=>{
    try{
        const payment=new Payment(req.body);
        await payment.save();
        res.status(200).json(payment);
    }catch(err){
        res.status(400).json({message:"Error creating payment",error:err});
    }
};

export const getPayment = async(req,res)=>{
    try{
        const payments=await Payment.find().populate("orderId");
        res.json(payments);
    }catch(err){
        res.status(400).json({message:"Error fetching payments",error:err});
    }
};

export const getPaymentById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({message:"Invalid payment Id"})
        }
        const payment=await Payment.findById(id).populate("orderId");
        if(!payment){
            return res.status(404).json("Payment not found !!");
        }
        res.json(payment);
    }catch(err){
        res.status(400).json({message:"Error fetching payment", error:err.message})
    }
}

export const updatePayment = async(req,res)=>{
    try{
        const {id} = req.params;
        const updated = await Payment.findByIdAndUpdate(id, req.body,{new:true});
        if(!updated){
            return res.status(404).json({message:"Payment not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating payment",error:err.message});
    }
};

export const deletePayment=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Payment.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message:"Payment noy found !!"})
        } 
        res.json({message:"Payment deleted successfully !!"});
    }catch(err){
        res.status(400).json({message:"Error deleting payment",error:err.message});
    }
};