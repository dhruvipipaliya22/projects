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

export const getHeroSlide = async(req,res)=>{}