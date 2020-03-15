// const mongoose = require("mongoose");
import mongoose, { Schema } from "mongoose";

const UsersSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
});

const Users = mongoose.model("Users", UsersSchema);

export default Users;
