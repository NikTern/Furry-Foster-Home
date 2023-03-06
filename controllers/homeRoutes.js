const path = require("path");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const petData = await Pets.findAll({
      where: {
        //TODO: MAY UPDATE THE COLUMN NAME AFTER DB CREATED
        isAdopted: false,
      },
    });
    res.json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/404-page', (req, res) => { 
  res.sendFile(path.join(__dirname, "../public/404.html"));
})

module.exports = router;
