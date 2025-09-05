import { Store } from "../models/store.model.js";


export const createStore =async(req,res)=>{
    try{
        const store = await Store.create(req.body);
        res.status(201).json({success:true,data:store});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStore=async(req,res)=>{
    try{
       const stores = await Store.find();
        res.json({success:true,data:stores});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const getStoreById = async(req,res)=>{
    try{
        const store=await Store.findById(req.params.id);
        if(!store) return res.status(404).json({success:false,message:"Store is not get !!"});
        res.json({success:true,data:store});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const updateStore =async(req,res)=>{
    try{
        const store=await Store.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({success:true,data:store});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

export const deleteStore = async(req,res)=>{
    try{
        const deletestore=await Store.findByIdAndDelete(req.params.id);
        res.json({success:true,data:deletestore,message:"Store deleted successfully"});
    }catch(err){
        res.status(400).json({success:false,message:err.message})
    }
};