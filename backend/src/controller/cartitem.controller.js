import { CartItem } from "../models/cartitem.model.js";

export const createCartItem = async (req, res) => {
    try {
        const { cartId, productId, variantId, quantity, priceAtAddition } = req.body;
        const total = quantity * priceAtAddition;
        const cartItem = new CartItem({ cartId, productId, variantId, quantity, priceAtAddition, total });
        res.status(201).json(cartItem);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "This product already exists in cart with same variant" });
        }
        res.status(400).json({ error: err.message });
    }
};

export const getAllCartItems = async (req, res) => {
    try {
        const cartItem = await CartItem.find().populate("cartId").populate("productId").populate("variantId");
        res.json(cartItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCartItemById = async (req, res) => {
    try {
        const cartItem = await CartItem.findById(req.params.id).populate("cartId").populate("productId").populate("variantId");
        if (!cartItem) return res.status(404).json({ error: "CartItem not found !!!" });
        res.json(cartItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity, priceAtAddition } = req.body;
    const total = quantity * priceAtAddition;
    const updated = await CartItem.findByIdAndUpdate(req.params.id, {...req.body,total}, { new: true,runValidators:true});
    if (!updated) return res.status(404).json({ error: "CartItem not found !!" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCartItem = async (req, res) => {
    try {
        const deleted = await CartItem.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "CartItem not found !!" });
        res.json({ message: "CartItem deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};