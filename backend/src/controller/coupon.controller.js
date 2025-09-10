import { Coupon } from "../models/coupon.model.js"

export const createCoupon = async(req,res)=>{
    try{
        const coupon = new Coupon(req.res);
        await coupon.save();
        res.status(200).json(coupon)
    }catch(err){
        res.status(400).json({message:err.message});
    }
};

export const getCoupon = async (req, res) => {
    try {
        const coupons = await Coupon.find().populate("storeId applicableProducts applicableCategories carts couponUsages");
        res.json(coupons);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCouponById = async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id).populate("storeId applicableProducts applicableCategories carts couponUsages");
        if (!coupon) return res.status(404).json({ error: "Coupon not found !!" });
        res.json(Coupon);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
         if (!coupon) return res.status(404).json({ error: "Coupon not found !!" });
        res.json(coupon);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCoupon = async (req, res) => {
     try {
        const deleted = await Coupon.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Coupon not found !!" });
        }
        res.json({ message: "Coupon deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting Coupon", error: err.message });
    }
};