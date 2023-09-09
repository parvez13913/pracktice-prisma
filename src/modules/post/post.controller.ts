import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const result = await PostService.createPost(data);

    res.send({
      success: true,
      statusCode: 200,
      message: "Post Created Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const result = await PostService.getAllPosts(options);

    res.send({
      success: true,
      statusCode: 200,
      message: "Post fetched Successfully!",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await PostService.getSinglePost(parseInt(id));

    res.send({
      success: true,
      statusCode: 200,
      message: "Post fetched Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await PostService.updatePost(id, data);

    res.send({
      success: true,
      statusCode: 200,
      message: "Post updated Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      statusCode: 200,
      message: "Post fetched Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.send({
      success: true,
      statusCode: 200,
      message: "Result Successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
