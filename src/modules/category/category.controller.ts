import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const result = await CategoryService.createCategory(data);

    res.send({
      success: true,
      message: "Category Created Successfully!",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  createCategory,
};
