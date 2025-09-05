import { User } from "../models/user.model.js"

// Get all user
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// get user id
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found !!" });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// create user
export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saved = await newUser.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// update user
export const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!updated) return res.status(404).json({ message: "User not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// deleted user
export const deleteUser = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "User not found !!" });
        res.json({ message: "User Deleted !!" });
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};