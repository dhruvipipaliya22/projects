import express from "express"
import { createTrackingEvent, deleteTrackingEvent, getTrackingEvent, getTrackingEventById, updateTrackingEvent } from "../controller/shippingtrackingevent.controller.js";

const TrackingEventRouter = express.Router();

TrackingEventRouter.route("/")
.get(getTrackingEvent)
.post(createTrackingEvent)

TrackingEventRouter.route("/:id")
.get(getTrackingEventById)
.put(updateTrackingEvent)
.delete(deleteTrackingEvent)

export default TrackingEventRouter