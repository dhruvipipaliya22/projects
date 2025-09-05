import express from "express"
import { createAddress, deleteAddress, getAddresses, getAddressesById, updateAddress } from "../controller/address.controller.js";

const addressRouter = express.Router();

addressRouter.route("/")
.get(getAddresses)
.post(createAddress)

addressRouter.route("/:id")
.get(getAddressesById)
.put(updateAddress)
.delete(deleteAddress)

export default addressRouter