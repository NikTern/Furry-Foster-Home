const router = require('express').Router();
const withAuth = require('../../../utils/auth.js'); 
const { User } =require('../../../models')

router.get('/user/:id', withAuth,async (req, res) => { 
    try {
        const userData = await User.findByPk(req.params.id);
        res.status(200).json(userData);

    } catch (err) { 
        res.status(500).json(err);
    }
})

router.put('/user/:id/:param', withAuth,async (req,res) => { 
    try {
        const userData = await User.update({
            param: req.body.param
        },
        {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(userData);

    } catch (err) { 
        res.status(500).json(err);
    }
})

module.exports = router;