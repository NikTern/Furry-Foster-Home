const path = require("path");
const sequelize = require("../../config/connection");
const router = require("express").Router();
const withAuth = require("../../utils/auth.js");
const { UserProfile, Pets } = require("../../models");
const bcrypt = require("bcrypt");
const { time } = require("console");

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
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
      req.session.user_first_name = userData.first_name;
      req.session.user_email = userData.email;
      req.session.logged_in = true;
      console.log(req.session);
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/register", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
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

router.get("/profile", withAuth, async (req, res) => {
  console.log(1234567);
  try {
    const userData = await UserProfile.findByPk(req.session.user_id, {
      include: [{ model: Pets }],
      attributes: {
        exclude: ["password"],
        include: [
          [
            // Use plain SQL to count the number of pets adopted
            sequelize.literal(
              "(SELECT COUNT(*) FROM pets WHERE pets.Adopted_by = userProfile.id)"
            ),
            "petsAdopted",
          ],
        ],
      },
    });
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/profile", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  console.log(req.body);
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
    console.log(userData);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/status', (req, res) => { 
  console.log(req.session);
    res.json(req.session);
})

// router.get("/", async (req, res) => {
//   try {
//     const userData = await UserProfile.findAll();
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// router.get("/:id", async (req, res) => {
//   try {
//     const userData = await UserProfile.findByPk(req.params.id);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
