const path = require("path");
const router = require("express").Router();
const { Pets, Category, Breed } = require("../models");


router.get('/404-page', (req, res) => { 
  res.sendFile(path.join(__dirname, "../public/404.html"));
})

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/login.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/signup.html"));
});

module.exports = router;

