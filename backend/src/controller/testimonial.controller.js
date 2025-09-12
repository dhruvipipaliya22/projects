import { Testimonial } from "../models/testimonial.model.js";

export const createTestimonial = async(req,res)=>{
    try{
        const testimonial = new Testimonial(req.body);
        await testimonial.save();
        res.status(200).json(testimonial);
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};

export const getTestimonial = async(req,res)=>{
    try{
        const testimonials = await Testimonial.find().populate("storeId").sort({displayOrder:1});
        res.json(testimonials);
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};

export const getTestimonialById = async(req,res)=>{
    try{
        const testimonial = await Testimonial.findById(req.params.id).populate("storeId");
        if(!testimonial){
            return res.status(404).json({error:"Testimonial not found !!"});
        }
        res.json(testimonial);
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};

export const updateTestimonial = async(req,res)=>{
    try{
        const updated = await Testimonial.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({error:"Testimonial not found !!"});
        }
        res.json(updated)
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};

export const deleteTestimonial = async(req,res)=>{
    try{
        const deleted = await Testimonial.findByIdAndDelete(req.params.id);
         if(!deleted){
            return res.status(404).json({error:"Testimonial not found !!"});
        }
        res.json({message:"Testimonial deleted successfully !!"});
    }catch(err){
        return res.status(400).json({error:err.message});
    }
};