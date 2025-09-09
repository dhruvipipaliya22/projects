import { ProductImage } from "../models/productimage.model.js";

export const createProductimage = async (req, res) => {
    try {
        const { productId, altText, width, height, order, isMainImage } = req.body;
        if(!productId){
            return res.status(400).json({error:"productId is required"});
        }
        if (!req.file) {
            return res.status(400).json("Image file is required");
        }
        const fileUrl = `/uploads/${req.file.filename}`
        const image = new ProductImage({ productId, url: fileUrl, altText, width, height, fileSize: req.file.size, order, isMainImage });
        await image.save();
        res.status(201).json(image);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    console.log("req.body:", req.body);
console.log("req.file:", req.file);
};

export const getallProductImage = async (req, res) => {
    try {
        const images = await ProductImage.find().populate("productId");
        res.json(images);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getProductImageById = async (req, res) => {
    try {
        const image = await ProductImage.findById(req.params.id).populate("productId");
        if (!image) return res.status(404).json({ error: "Product image not found !!" });
        res.json(image);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateProductImage = async (req, res) => {
    try {
        const updated = await ProductImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "Product image not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteProductImage = async (req, res) => {
    try {
        const deleted = await ProductImage.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Product image not found !!" });
        res.json({ message: "Product image deleted Successfully !!" });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};