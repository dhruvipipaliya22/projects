import mongoose from "mongoose";
import { Cart } from "../models/cart.model.js";

export const createCart = async (req, res) => {
    try {
        const { userId, storeId, couponId, sessionId, expiresAt, itemCount, subtotal, total } = req.body;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: "Invalid userId" });
        }
        if (!mongoose.Types.ObjectId.isValid(storeId)) {
            return res.status(400).json({ error: "Invalid storeId" });
        }
        if (!storeId || !expiresAt) {
            return res.status(400).json({ error: "storeId and expiresAt are required" });
        }
        const cart = new Cart({ userId, storeId, couponId, sessionId, expiresAt, itemCount, subtotal, total });
        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find().populate("userId").populate("storeId").populate("couponId");
        res.json(carts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate("userId").populate("storeId").populate("couponId");
        if (!cart) return res.status(404).json({ error: "Cart not found !!!" });
        res.json(cart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCartById = async (req, res) => {
    try {
        const updated = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "Cart not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const deleted = await Cart.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Cart not found !!" });
        res.json({ message: "Cart deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};