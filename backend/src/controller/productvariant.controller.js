import { ProductVariant } from "../models/productvariant.model.js";

export const createProductVariant = async (req, res) => {
    try {
        const { productId, sku, price, comparePrice, costPrice, quantity, color, size, material, style } = req.body;
        if(!productId){
            return res.status(400).json({error:"ProductId is required"});
        }
        const variant =new ProductVariant({productId,sku,price,comparePrice,costPrice,quantity,color,size,material,style});
        await variant.save();
        res.status(200).json(variant);
    } catch (err) { 
        res.status(400).json({error:err.message});
    }
};

export const getAllProductVariant = async(req,res)=>{
    try{
        const {productId, color, size}=req.query;
        const filter = {};
        if(productId) filter.productId=productId;
        if(color) filter.color=color;
        if(size) filter.size=size;
        const variants=await ProductVariant.find(filter).populate("productId").sort({createdAt:-1});
        res.json(variants);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getProductVariantById =async(req,res)=>{
    try{
        const variant=await ProductVariant.findById(req.params.id).populate("productId");
        if(!variant) return res.status(404).json({error:"Productvariant not found !!"});
        res.json(variant);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateProductVariant = async (req,res)=>{
    try{
        const updated = await ProductVariant.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({error:"Productvariant not found !!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteProductVariant=async(req,res)=>{
    try{
        const deleted=await ProductVariant.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({error:"Productvariant not found !!"});
        res.json({message:"Productvariant deleted successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};