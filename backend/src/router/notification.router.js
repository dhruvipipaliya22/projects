import express from "express";
import { createNotification, deleteNotification, getNotificationById, getNotifications, updateNotification } from "../controller/notification.controller.js";

const NotificationRouter = express.Router();

NotificationRouter.route("/")
.get(getNotifications)
.post(createNotification)

NotificationRouter.route("/:id")
.get(getNotificationById)
.put(updateNotification)
.delete(deleteNotification)

export default NotificationRouter