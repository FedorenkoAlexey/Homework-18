const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
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

module.exports = Users;
