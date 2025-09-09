import { Tag } from "../models/teg.model.js";

export const createTag = async(req,res)=>{
    try{
        const{name, type, category}=req.body
        if(!name || !category){
            return res.status(400).json({error:"name and category are required"});
        }
        const tag = new Tag({name, type, category});
        await tag.save();
        res.status(201).json(tag);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getAllTags = async(req,res)=>{
    try{
        const tags=await Tag.find();
        res.json(tags);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getTagById = async(req,res)=>{
    try{
        const tag = await Tag.findById(req.params.id);
        if(!tag) return res.status(404).json({error:"Tag not found !!"});
        res.json(tag);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateTag = async(req,res)=>{
    try{
        const updated =await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({error:"Tag not found !!"});
        res.json(updated)
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteTag = async(req,res)=>{
    try{
        const deleted= await Tag.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({error:err.message});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};