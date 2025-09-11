import { SessionTracking } from "../models/sessiontracking.model.js";

export const createSessionTracking = async (req,res)=>{
    try{
        //  const { sessionId, storeId, ipAddress } = req.body;
        // if(!sessionId || !storeId || !ipAddress){
        //     return res.status(400).json({error:"sessionId , storeId and ipAddress is required !!"});
        // }
        const session = new SessionTracking(req.body);
        await session.save();
        res.status(200).json(session);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getSessionTracking = async(req,res)=>{
    try{
        // const {storeId, userId, isActive}=req.query;
        // const filter = {};
        // if(storeId) filter.storeId = storeId;
        // if(userId) filter.userId=userId;
        // if(isActive) filter.isActive = isActive==="true";
        const sessions = await SessionTracking.find();
        res.json(sessions);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const getSessionTrackingById = async(req,res)=>{
    try{
        // const {id}=req.params;
        const session=await SessionTracking.findById(req.params.id);
        if(!session){
            return res.status(404).json({error:"Session Tracking not found !!"});
        }
        res.json(session);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const updateSessionTracking = async(req,res)=>{
    try{
        // const {id}= req.params;
        const updated=await SessionTracking.findByIdAndDelete(req.params.id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({error:"Session Tracking  not found !!"});
        }
        res.json(updated);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

export const deleteSessionTracking = async(req,res)=>{
    try{
        // const {id}= req.params;
        const deleted=await SessionTracking.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({error:"Session Tracking not found !!"});
        }
        res.json({message:"Session Tracking deleted Successfully !!"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};