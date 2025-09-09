import { WishlistItem } from "../models/wishlistitem.model.js";

export const addWishlistItem = async (req,res)=>{
    try{
        const {userId, productId, storeId, note}=req.body;
        const wishlistitem = new WishlistItem({userId, productId, storeId, note});
        await wishlistitem.save();
        res.status(200).json(wishlistitem)
    }catch(err){
        if(err.code === 11000){
            return res.status(404).json({message:"Product already in wishlist !!"})
        }
        res.status(400).json({message:"Error adding to wishlist",err})
    }
};

export const getWishlistItem=async(req,res)=>{
    try{
        const {userId}=req.params;
        const wishlist = await WishlistItem.find({userId}).populate("productId").populate("storeId");
        res.json(wishlist);
    }catch(err){
        res.status(400).json({message:"Error fetching wishlist",err});
    }
};

export const updateWishlistItem = async (req,res)=>{
    try{
        const {id}= req.params;
        const {note}=req.body;
        const updated=await WishlistItem.findByIdAndUpdate(id,{note},{new:true});
        if(!updated){
            return res.status(404).json({message:"Wishlist item not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating wishlist",err});
    }
};

export const deleteWishlistItem = async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted = await WishlistItem.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message:"wishlist item not found !!!"});
        }
        res.json({message:"WishlistItem deleted successfully !!!"});
    }catch(err){
        res.status(400).json({message:"Error updating wishlist",err});
    }
};