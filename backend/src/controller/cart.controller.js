import { Cart } from "../models/cart.model.js";

export const createCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(201).json(cart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find().populate("userId" , "name email").populate("storeId", "name").populate("couponId","code discount").sort({createdAt:1});
        res.json(carts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate("userId","name email").populate("storeId","name").populate("couponId","code discount");
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