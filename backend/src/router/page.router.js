import express from "express";
import { createPage, deletePage, getPageById, getPages, updatePage } from "../controller/page.controller.js";

const PageRouter =express.Router();

PageRouter.route("/")
.get(getPages)
.post(createPage)

PageRouter.route("/:id")
.get(getPageById)
.put(updatePage)
.delete(deletePage)

export default PageRouter