import { ProductView } from "../models/productview.model.js";

export const createProductView = async (req,res)=>{
    try{
         const { productId, storeId, ipAddress } = req.body;
        if(!productId || !storeId || !ipAddress){
            return res.status(400).json({error:"productId , storeId and ipAddress is required !!"});
        }
        const productView = new ProductView(req.body);
        await productView.save();
        res.status(200).json(productView);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getProductView = async(req,res)=>{
    try{
        // const {productId, storeId, userId}=req.query;
        // const filter = {};
        // if(productId) filter.productId = productId;
        // if(storeId) filter.storeId = storeId;
        // if(userId) filter.userId=userId;
        const productViews = await ProductView.find().sort({createdAt:-1});
        res.json(productViews);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getProductViewById = async(req,res)=>{
    try{
        const {id}=req.params;
        const productView=await ProductView.findById(id);
        if(!productView){
            return res.status(404).json({error:"ProductView not found !!"});
        }
        res.json(productView);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteProductView = async(req,res)=>{
    try{
        const {id}= req.params;
        const deleted=await ProductView.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({error:"ProductView not found !!"});
        }
        res.json({message:"ProductView deleted Successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};