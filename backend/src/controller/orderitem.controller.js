import { OrderItem } from "../models/orderitem.model.js";

export const createOrderItem = async(req,res)=>{
    try{
        const orderitem = new OrderItem(req.body);
        await orderitem.save();
        res.status(200).json(orderitem);
    }catch(err){
        res.status(400).json({message:"Error creating order item",error:err});
    }
};

export const getOrderItems = async(req,res)=>{
    try{
        const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid order item ID" });
    }
        const items=await OrderItem.find().populate("orderId").populate("productId").populate("variantId");
        res.json(items);
    }catch(err){
        res.status(400).json({message:"Error fetching order item",error:err});
    }
};

export const getOrderItemByIdOrder = async(req,res)=>{
    try{
        const item=await OrderItem.find(req.params.id).populate("orderId").populate("productId").populate("variantId");
        if(!item) return res.status(404).json({message:"Order item not found !!!"});
        res.json(item);
    }catch(err){
        res.status(500).json({message:"Error fetching order items by order",error:err});
    }
};

export const getOrderItemById = async(req,res)=>{
    try{
        const item=await OrderItem.findById(req.params.id).populate("productId").populate("variantId");
        if(!item) return res.status(404).json({message:"Order item not found !!!"});
        res.json(item);
    }catch(err){
        res.status(500).json({message:"Error fetching order items",error:err});
    }
};

export const updateOrderItem = async(req,res)=>{
    try{
        const updated = await OrderItem.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"Order item not found !!!"});
        res.json(updated);
    }catch(err){
        res.status(400).json({message:"Error updating order item",error:err});
    }
};

export const deleteOrderItem = async (req,res)=>{
    try{
        const deleted = await OrderItem.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"Order item not found !!"});
        res.json({message:"Order item deleted successfully !!!"});
    }catch(err){
        res.status(400).json({message:"Error deleting order item",error:err});
    }
};