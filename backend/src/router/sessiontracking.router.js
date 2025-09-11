import express from "express";
import { createSessionTracking, deleteSessionTracking, getSessionTracking, getSessionTrackingById, updateSessionTracking } from "../controller/sessiontracking.controller.js";

const SessionTrackingRouter = express.Router();

SessionTrackingRouter.route("/")
.get(getSessionTracking)
.put(createSessionTracking)

SessionTrackingRouter.route("/:id")
.get(getSessionTrackingById)
.put(updateSessionTracking)
.delete(deleteSessionTracking)

export default SessionTrackingRouter