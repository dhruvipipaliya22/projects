import express from "express"
import { createPayment, deletePayment, getPayment, getPaymentById, updatePayment } from "../controller/payment.controller.js";

const paymentRouter = express.Router();

paymentRouter.route("/")
.get(getPayment)
.post(createPayment)

paymentRouter.route("/:id")
.get(getPaymentById)
.put(updatePayment)
.delete(deletePayment)

export default paymentRouter