const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
      const petData = await Pets.findAll({
          where: {
              
              //TODO: MAY UPDATE THE COLUMN NAME AFTER DB CREATED
              isAdopted: false
          }
      });
    res.json(petData);
} catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;