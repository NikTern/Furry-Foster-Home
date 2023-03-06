const path = require("path");
const router = require("express").Router();
const withAuth = require("../../utils/auth.js");
const { UserProfile, Pets } = require("../../models");
const bcrypt = require("bcrypt");
const { time } = require("console");

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
    res.sendFile(path.join(__dirname, "../../public/html/login.html"));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await UserProfile.findOne({
      where: { email: req.body.email },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //TODO: need to add checkPassword() into UserProfile model
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_email = userData.email;
      req.session.logged_in = true;
      console.log(req.session);
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/register", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
    res.sendFile(path.join(__dirname, "../../public/html/signup.html"));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newUser = req.body;
    const hasUser = await UserProfile.findOne({
      where: { email: newUser.email },
    });
    if (hasUser) {
      return res.json("email exist");
    }
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const userData = await UserProfile.create(newUser);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_email = userData.email;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await UserProfile.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const userData = await UserProfile.findByPk(req.params.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await UserProfile.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Pets }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/profile", withAuth, async (req, res) => {
  try {
    const userData = await UserProfile.update(req.body, {
      where: {
        id: req.session.user_id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
