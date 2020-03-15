// const express = require("express");
import express from "express";
import { Router } from "express";
import userService from "../service/userService";
import Users from "../models/Users";
const router = Router();

// const router = express.Router();

router.get("/add/:id", (req: express.Request, res: express.Response) => {
  Users.create({
    name: "Sophia",
    age: 21
  })
    .then((user: any) => res.send(user))
    .catch((err: Error) => res.send(err));
});

router.get("/get/:id", (req: express.Request, res: express.Response) => {
  let result = Users.findById({ _id: "5e6cd4c60202df0c4c5c18c2" });
  console.log("result", result);
});

router.get("/:id", (req: express.Request, res: express.Response) => {
  Users.deleteOne({ _id: "5e6e3212b753af093c130bf7" }).exec();
});

router.get("/", (req, res) => {
  userService.getUsers(req, res);
});

// router.get("/", (res: express.Request, req) => {
//   let items = Users.find({}).exec();
//   console.log("res.body", res.body);
//   items.then(res => console.log("PROMISE", res));
// });

export default router;
