import express from "express";
import Users from "../models/Users";

class userService {
  getUsers = (req: express.Request, res: express.Response) => {
    const users = Users.find();
    console.log("users", users);
    res.send(users);
  };
}

export default new userService();
