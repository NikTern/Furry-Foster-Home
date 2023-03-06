const router = require('express').Router();
const { Pets,Category,Breed } = require('../../models');
const withAuth = require('../../utils/auth.js');

//Code which fixes CORS error
const cors = require('cors');
router.use(cors());
//

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

router.get('/:id', async (req, res) => {
  try {
    const petData = await Pets.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: Breed,
          attributes:['breed_name'],
        }
      ],
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (res, req) => { 
    try {
        const updatePet = await Pets.update(
          {
            //TODO: MAY UPDATE THE COLUMNS NAME AFTER DB CREATED
            isAdopted: true,

            //TODO: CHECK WITH LOGIN POST REQUEST FOR SESSION PROPERTY NAME
            Adopted_by: req.session.user_id,
          },
          {
            where: {
              id: res.params.id,
            },
          }
        );
        res.status(200).json(updatePet);

    } catch (err) { 
        res.status(500).json(err);
    }
    
})


router.get("/category/:id", async (req, res) => {
  try {
    const petData = await Pets.findAll({
      where: {
        category_id: req.params.id,
        isAdopted: false
      }
    });

    if (!petData) {
      res.status(404).json({ message: "No pet found with this category id!" });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
