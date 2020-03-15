// const express = require("express");
import express from "express";
import { Router } from "express";
import userService from "../service/userService";
// const router = require("express").Router();
// import Users from "../models/Users";
const router = Router();

// router.get("/users", (req: express.Request, res: express.Response) => {
//   Users.create({
//     name: "Sophia",
//     age: 21
//   })
//     .then((user: any) => res.send(user))
//     .catch((err: Error) => res.send(err));
// });

router.get("/users", (req, res) => {
  console.log(`USERS`);
  userService.getUsers(req, res);
});

// module.exports = router;
// export default router;
