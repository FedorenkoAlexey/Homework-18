// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/userRoutes";
const PORT: number = 5000;

const app = express();
// const users = require("./routes/userRoutes");
// console.log(process.env.MONGODB_URI);

mongoose
  .connect(
    `mongodb+srv://Alex:qwe123@cluster0-dgkwc.mongodb.net/homework18?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoBD connected"))
  .catch((err: Error) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to Node API");
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
