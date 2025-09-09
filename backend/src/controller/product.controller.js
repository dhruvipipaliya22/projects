import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        if (!req.body.storeCategoryId) {
            return res.status(400).json({ error: "storeCategoryId is required" });
        }
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getallProduct = async (req, res) => {
    try {
        const { storeId, status, brand, isActive } = req.query;
        const filter = {};
        if (storeId) filter.storeId = storeId;
        if (status) filter.status = status;
        if (brand) filter.brand = brand;
        if (isActive !== undefined) filter.isActive = isActive === "true";
        const products = await Product.find(filter).populate("storeId").sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("storeId");
        if (!product) return res.status(404).json({ error: "Product not found !!" });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "Product not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Product not found !!" });
        res.json({ message: "Product deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};