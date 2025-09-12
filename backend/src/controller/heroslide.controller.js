import { HeroSlide } from "../models/heroslide.model.js"

export const createHeroSlide =async(req,res)=>{
    try{
        const heroslide = new HeroSlide(req.body);
        const saved = await heroslide.save();
        res.status(200).json(saved);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getHeroSlides = async(req,res)=>{
    try{
        const slides= await HeroSlide.find().populate("storeId").sort({displayOrder:1});
        res.json(slides);
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

export const getHeroSlideById = async(req,res)=>{
    try{
        const slide=await HeroSlide.findById(req.params.id).populate("storeId");
        if(!slide){
            return res.status(404).json({error:"HeroSlide not found !!"});
        }
        res.json(slide)
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateHeroSlider = async(req,res)=>{
    try{
        const updated = await HeroSlide.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({error:"HeroSlide not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteHeroSlider = async(req,res)=>{
    try{
        const deleted  = await HeroSlide.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"HeroSlide not found !!"});
        }
        res.json({message:"HeroSlide deleted successfully !!"});
    }catch(err){
        res.json(400).json({error:err.message});
    }
};