import express from "express"
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../controller/teg.controller.js";

const tagRouter = express.Router();

tagRouter.route("/")
.get(getAllTags)
.post(createTag)

tagRouter.route("/:id")
.get(getTagById)
.put(updateTag)
.delete(deleteTag)

export default tagRouter