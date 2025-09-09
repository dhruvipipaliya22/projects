import { Review } from "../models/review.model.js";

export const createReview = async(req,res)=>{
    try{
          console.log("req.body =>", req.body);
        console.log("productId =>", productId);
        console.log("tagId =>", tagId);
        console.log("value =>", value);
        const{productId, userId, rating, title, comment}=req.body
        if(!productId || !userId || !rating){
            return res.status(400).json({error:"productId, userId and rating are required"});
        }
        const review = new Review({productId, tagId, value});
        await review.save();
        res.status(201).json(review);
    }catch(err){
        if(err.code === 11000){
            return res.status(400).json({error:"User has already reviewed this product"});
        }
        res.status(400).json({error:err.message});
    }
};

export const getAllReview = async(req,res)=>{
    try{
        const reviews=await Review.find().populate("productid","name price").populate("userId","name email");
        res.json(reviews);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getReviewById = async(req,res)=>{
    try{
        const review = await Review.findById(req.params.id);
        if(!review) return res.status(404).json({error:"Review not found !!"});
        res.json(review);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateReview = async(req,res)=>{
    try{
        const updated =await Review.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({error:"Review not found !!"});
        res.json(updated)
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteReview = async(req,res)=>{
    try{
        const deleted= await Review.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({error:"Review not Found !!"});
        res.json({message:"Review deleted successfully !!!"})
    }catch(err){
        res.status(400).json({error:err.message});
    }
};