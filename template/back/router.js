const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.html");
});

router.get("/login", (req, res) => {
  res.render("login.html");
});

router.get("/signin", (req, res) => {
  res.render("signin.html");
});

router.get("/forgotPassword", (req, res) => {
  res.render("forgotPassword.html");
});

module.exports = router;
