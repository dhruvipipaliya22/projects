import { Address } from "../models/address.model.js"

// get all Addresses
export const getAddresses = async (req,res)=>{
    try{
        const addresses=await Address.find();
        res.json(addresses);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

// get single
export const getAddressesById=async(req,res)=>{
    try{
        const address=await Address.findById(req.params.id);
        if(!address) return res.status(404).json({message:"Address not found !!"});
        res.json(address);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

// create address
export const createAddress = async (req,res)=>{
    try{
        const newAddress = new Address(req.body);
        const saved=await newAddress.save();
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

// update address
export const updateAddress= async(req,res)=>{
    try{
        const updated=await Address.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        if(!updated) return res.status(404).json({message:"Address is not updates!!"});
        res.json(updated)
    }catch(err){
        res.status(400).json({error:err.message})
    }
};

// delete address
export const deleteAddress = async (req,res)=>{
    try{
        const deleted = await Address.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"Address is deleted !!"});
        res.json(deleted)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}