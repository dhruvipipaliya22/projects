import { WishlistEvent } from "../models/wishlistevent.model.js"

export const createWishlistEvent = async(req,res)=>{
    try{
        const wishlistevent = new WishlistEvent(req.body);
        await wishlistevent.save();
        res.status(200).json(wishlistevent);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getWishlistEvent = async(req,res)=>{
    try{
        const event= await WishlistEvent.find();
        res.json(event);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getWishlistEventById=async(req,res)=>{
    try{
        const event = await WishlistEvent.findById(req.params.id);
        if(!event){
            return res.status(404).json({error:"WishlistEvent not found !!"});
        }
        res.json(event);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateWishlistEvent = async(req,res)=>{
    try{
        const update = await WishlistEvent.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({error:"WishlistEvent not found !!"});
        }
        res.json(update);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteWishlistEvent = async(req,res)=>{
    try{
        const deleted = await WishlistEvent.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"WishlistEvent not found !!"})
        }
        res.json({message:"WishlistEvent deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};