// const express = require("express");
import express from "express";
import { Router } from "express";
import userService from "../service/userService";
import Users from "../models/Users";
const router = Router();

router.get("/", (req, res) => {
  userService.getUsers(req, res);
});

router.get("/get/:id", (req, res) => {
  userService.getUserOne(req, res);
});

// router.get("/get/:id", async (req: express.Request, res: express.Response) => {
//   let result = await Users.findById({ _id: "5e6cd4c60202df0c4c5c18c2" });
//   res.send(result);
//   console.log("result", result);
// });

router.delete("/del/:id", (req, res) => {
  userService.deleteUser(req, res);
});

// router.get("/del/:id", (req: express.Request, res: express.Response) => {
//   Users.deleteOne({ _id: "5e6e3212b753af093c130bf7" }).exec();
// });

router.post("/add/:id", (req, res) => {
  userService.addUser(req, res);
});

// router.get("/add/:id", (req: express.Request, res: express.Response) => {
//   Users.create({
//     name: "Sophia",
//     age: 21
//   })
//     .then((user: any) => res.send(user))
//     .catch((err: Error) => res.send(err));
// });

router.put("/put/:id", (req, res) => {
  userService.updateUser(req, res);
});

export default router;
