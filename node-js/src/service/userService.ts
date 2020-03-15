import express from "express";
import Users from "../models/Users";

class userService {
  getUsers = async (req: express.Request, res: express.Response) => {
    try {
      const users = await Users.find().exec();
      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  getUserOne = async (req: express.Request, res: express.Response) => {
    const id: number = Number(req.params.id);
    try {
      const users = await Users.findById(id).exec();
      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  deleteUser = async (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    try {
      const user = await Users.deleteOne({ _id: id }).exec();
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  addUser = async (req: express.Request, res: express.Response) => {
    try {
      await Users.create({
        name: req.body.name,
        age: req.body.age,
        isPassed: false
      });
      res.sendStatus(201);
    } catch (e) {
      res.status(404).send(e.message);
    }
  };

  updateUser = async (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    try {
      await Users.updateOne(
        { _id: id },
        { isPassed: req.body.isPassed }
      ).exec();
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };
}

export default new userService();
