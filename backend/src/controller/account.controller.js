import { Account } from "../models/account.model.js";

// Get all
export const getaccount = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// Get singl account
export const getAccountById = async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) return res.status(404).json({ message: "Account not Found!!" });
        res.json(account);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// Create account
export const createAccount = async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        const saved = await newAccount.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// Update account
export const updateAccount = async (req, res) => {
    try {
        const updated = await Account.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updated) return res.status(404).json({ message: "Account not found !!" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

// Delete account
export const deleteAccount = async (req, res) => {
    try {
        const deleted = await Account.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(400).json({ message: "Account not found !!" });
        res.json({ message: "Account Deleted !!" })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};