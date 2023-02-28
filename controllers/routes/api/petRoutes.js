const router = require('express').Router();
const { Pets,Category,Breed } = require('../../../models');
const withAuth = require('../../../utils/auth.js');

router.get('/', async (req, res) => {
  try {
      const petData = await Pets.findAll({
          where: {
              
              //TODO: MAY UPDATE THE COLUMN NAME AFTER DB CREATED
              adopted: false
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
          attributes: ['category'],
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

router.post('/:id', withAuth, async (res, req) => { 
    try {
        const updatePet = await Pets.update({

            //TODO: MAY UPDATE THE COLUMNS NAME AFTER DB CREATED
            adopted: true,

            //TODO: CHECK WITH LOGIN POST REQUEST FOR SESSION PROPERTY NAME
            adopter_id: req.session.user_id
        },
        {
            where: {
                id:res.params.id
            }
            })
        res.status(200).json(updatePet);
        
    } catch (err) { 
        res.status(500).json(err);
    }
    
})

module.exports = router;
