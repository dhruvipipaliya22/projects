import { CartEvent } from "../models/cartevent.model.js"

export const createCartEvent = async (req,res)=>{
    try{
        const cartevent =new CartEvent(req.body);
        await cartevent.save();
        res.status(200).json(cartevent);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getCartEvent =async(req,res)=>{
    try{
        const event = await CartEvent.find();
        res.json(event);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getCartEventById = async(req,res)=>{
    try{
        const event = await CartEvent.findById(req.params.id);
        if(!event){
            res.status(404).json({error:"CartEvent not found !!"});
        }
           res.json(event);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateCartEvent = async(req,res)=>{
    try{
        const updated = await CartEvent.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({error:"CartEvent not found !!!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const deleteCartEvent =async(req,res)=>{
    try{
        const deleted = await CartEvent.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({message:"CartEvent not found !!"});
        }
        res.json({message:"CartEvent deleted successfully !!"});
    }catch(err){
        res.status(500).json({error:err.message})
    }
};