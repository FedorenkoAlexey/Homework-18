import express from "express";
import Users from "../models/Users";

class userService {
  getUsers = async (req: express.Request, res: express.Response) => {
    const users = await Users.find().exec();
    console.log("users1111", users);
    res.status(200).send(users);
  };
}

export default new userService();
