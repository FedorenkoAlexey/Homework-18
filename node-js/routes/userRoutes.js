const express = require("express");
const router = require("express").Router();
const Users = require("../models/Users");

router.get("/users", (req, res) => {
  Users.create({
    name: "Sophia",
    age: 21
  })
    .then(user => res.send(user))
    .catch(err => res.send(err));
});

module.exports = router;
