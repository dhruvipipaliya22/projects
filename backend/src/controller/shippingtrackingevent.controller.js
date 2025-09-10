import { ShippingTrackingEvent } from "../models/shippingtrackingevent.model.js"

export const createTrackingEvent = async (req, res) => {
    try {
        const event = new ShippingTrackingEvent(req.body);
        await event.save();
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

export const getTrackingEvent = async (req, res) => {
    try {
        const events = await ShippingTrackingEvent.find().populate("shippingId");
        res.json(events);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getTrackingEventById = async (req, res) => {
    try {
        const event = await ShippingTrackingEvent.findById(req.params.id).populate("shippingId");
        if (!event) return res.status(404).json({ error: "Tracking event not found !!" });
        res.json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateTrackingEvent = async (req, res) => {
    try {
        const event = await ShippingTrackingEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteTrackingEvent = async (req, res) => {
     try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const deleted = await ShippingTrackingEvent.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Tracking event not found !!" });
        }

        res.json({ message: "Tracking event deleted successfully !!" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting tracking event", error: err.message });
    }
}