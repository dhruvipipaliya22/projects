import { Page } from "../models/page.model.js"

export const createPage = async(req,res)=>{
    try{
        const page = new Page(req.body);
        const saved = await page.save();
        res.status(201).json(saved);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getPages = async(req,res)=>{
    try{
        const pages = await Page.find().populate("storeId");
        res.json(pages);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getPageById = async (req,res)=>{
    try{
        const page = await Page.findById(req.params.id).populate("storeId");
        if(!page){
            return res.status(404).json({error:"Page not found !!!"});
        }
        res.json(page);
    }catch(err){
        res.status(400).json({error:err.message});  
    }
};

export const updatePage = async(req,res)=>{
    try{
        const update = await Page.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({error:"Page not found !!"});
        }
        res.json(update);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deletePage =async(req,res)=>{
    try{
        const deleted = await Page.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Page not found !!"});
        }
        res.json({message:"Page deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};