import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.get("/aggregate", PostController.learnAggregateAndGrouping);
router.get("/:id", PostController.getSinglePost);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.post("/create-post", PostController.createPost);
router.get("/", PostController.getAllPosts);

export const PostRoutes = router;
