import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;
    const result = await UserService.createUSer(data);
    res.send({
      success: true,
      message: "User Created Succesfully!",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await UserService.createOrUpdateProfile(data);
    res.send({
      success: true,
      message: "Profile Created/Updated Succesfully!",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.send({
      success: true,
      message: "Data fatched Succesfully!",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await UserService.getSingleUser(parseInt(id));
    res.send({
      success: true,
      message: "Data fatched Succesfully!",
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  createOrUpdateProfile,
  getAllUsers,
  getSingleUser,
};
