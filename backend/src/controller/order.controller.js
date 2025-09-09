import { Order } from "../models/order.model.js"

export const createOrder = async(req,res)=>{
    try{
        const order = new Order(req.body);
        await order.save();
        res.status(200).json(order);
    }catch(err){
        res.status(400).json({message:"Error creating order",err});
    }
};

export const getOrders = async(req,res)=>{
    try{
        const orders=await Order.find().populate("userId").populate("storeId");
        res.json(orders);
    }catch(err){
        res.status(400).json({message:"Error fetching orders",err});
    }
};

export const getOrderById = async(req,res)=>{
    try{
        const order=await Order.findById(req.params.id).populate("userId").populate("storeId");
        if(!order) return res.status(404).json({message:"Order not found !!!"});
        res.json(order);
    }catch(err){
        res.status(500).json({message:"Error fetching order",err});
    }
};

export const updateOrder = async(req,res)=>{
    try{
        const updated = await Order.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"Order not found !!!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error fetching order",err});
    }
};

export const deleteOrder = async (req,res)=>{
    try{
        const deleted = await Order.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"Order not found !!"});
        res.json({message:"Order deleted successfully !!!"});
    }catch(err){
        res.status(400).json({message:"Error deleting order",err})
    }
};