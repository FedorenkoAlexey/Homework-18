// const mongoose = require("mongoose");
import mongoose, { Schema } from "mongoose";

const UsersSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  raiting: {
    type: Number,
    default: null
  },
  isCancel: {
    type: Boolean,
    default: true
  },
  isReadOnly: {
    type: Boolean,
    default: false
  }
});

const Users = mongoose.model("Users", UsersSchema);

export default Users;
