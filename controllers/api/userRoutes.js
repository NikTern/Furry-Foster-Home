const router = require('express').Router();
const withAuth = require('../../utils/auth.js'); 
const { User,Pets } =require('../../models')

router.get('/user/profile', withAuth,async (req, res) => { 
    try {
        const userData = await User.findByPk(req.session.user_id,{
      attributes: { exclude: ['password'] },
      include: [{ model: Pets }],
    });
        res.status(200).json(userData);

    } catch (err) { 
        res.status(500).json(err);
    }
})

router.put('/user/profile', withAuth,async (req,res) => { 
    try {
        const userData = await User.update(req.body,{
            where: {
                id: req.session.user_id,
            }
            });
        if (!userData[0]) { 
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }
        res.status(200).json(userData);

    } catch (err) { 
        res.status(500).json(err);
    }
})

module.exports = router;