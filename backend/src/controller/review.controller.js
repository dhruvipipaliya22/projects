import { Review } from "../models/review.model.js";

export const createReview = async(req,res)=>{
    try{
        const review = await Review.create(req.body);
        res.status(201).json(review);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getAllReview = async(req,res)=>{
    try{
        const {productId, userId, status}=req.query;
        const filter={};
        if(productId) filter.productId=productId;
        if(userId) filter.userId=userId;
        if(status) filter.status=status;
        const reviews=await Review.find(filter).populate("productId","name price").populate("userId","name email").sort({createdAt: -1});
        res.json(reviews);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getReviewById = async(req,res)=>{
    try{
        const review = await Review.findById(req.params.id).populate("userId","name email").populate("productId","name price");
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
        res.json(updated);
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