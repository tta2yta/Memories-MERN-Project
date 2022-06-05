import express from "express";
import { getPosts } from "../controllers/PostsController.js";

const router= express.Router();

router.get('/', getPosts)

export default router;