import { Storecategory } from "../models/storecategory.model.js";

export const createStoreCategory = async (req, res) => {
    try {
        const storeCategory = new Storecategory(req.body);
        await storeCategory.save();
        res.status(201).json(storeCategory);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getallStoreCategories = async (req, res) => {
    try {
        const { storeId, isActive } = req.query;
        const filter = {};
        if (storeId) filter.storeId = storeId;
        if (isActive !== undefined) filter.isActive = isActive === "true";
        const categories = await Storecategory.find(filter).populate("storeId").sort({ storeOrder: 1 });
        res.json(categories);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getStoreCategoryById = async (req, res) => {
    try {
        const category = await Storecategory.findById(req.params.id).populate("storeId");
        if (!category) return res.status(404).json({ error: "StoreCategory not found !!" });
        res.json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateStoreCategory = async (req, res) => {
    try {
        const updated = await Storecategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "StoreCategory not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteStoreCtegory = async (req, res) => {
    try {
        const deleted = await Storecategory.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "StoreCategory not found !!" });
        res.json({ message: "StoreCategory deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};