import express from "express"
import { createAccount, deleteAccount, getaccount, getAccountById, updateAccount } from "../controller/account.controller.js";

const accountRouter = express.Router();

accountRouter.route("/")
    .post(createAccount)
    .get(getaccount)

accountRouter.route("/:id")
    .get(getAccountById)
    .put(updateAccount)
    .delete(deleteAccount)

export default accountRouter