import { ProductImage } from "../models/productimage.model.js";

export const createProductimage = async (req, res) => {
    try {
        const { productId, altText, width, height, order, isMainImage } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Product Image file is required" });
        }
        const url = `/uploads/${req.file.filename}`;
        const fileSize = req.file.size;
        if (isMainImage === "true" || isMainImage === true) {
            await ProductImage.updateMany({ productId }, { isMainImage: false });
        }
        const image = new ProductImage({
            productId,
            url,
            altText,
            width,
            height,
            fileSize,
            order,
            isMainImage: isMainImage === "true" || isMainImage === true,
        });
        await image.save();
        res.status(201).json(image);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getallProductImage = async (req, res) => {
    try {
        const images = await ProductImage.find({ productId: req.params.productId }).sort({ order: 1 });
        res.json(images);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getProductImageById = async (req, res) => {
    try {
        const image = await ProductImage.findById(req.params.id);
        if (!image) return res.status(404).json({ error: "Product image not found !!" });
        res.json(image);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateProductImage = async (req, res) => {
    try {
        const { productId, altText, width, height, order, isMainImage } = req.body;
        let updateData = {
            productId,
            altText,
            width,
            height,
            order,
            isMainImage: isMainImage === "true" || isMainImage === true,
        };
        if (req.file) {
            updateData.url = `/uploads/${req.file.filename}`;
            updateData.fileSize = req.file.size;
        }
        if (isMainImage === "true" || isMainImage === true) {
            await ProductImage.updateMany({ productId }, { isMainImage: false });
        }
        const image = await ProductImage.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );
        if (!image) return res.status(404).json({ error: "Product Image not found !!" });
        res.json(image);
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
        res.status(400).json({ error: err.message });
    }
};
