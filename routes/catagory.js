const router = require('express').Router();;

const { createCatagory } = require('../controllers/catagory');
const { requireSignIn, isAdmin, isAuth } = require('../controllers/auth');

router.post('/catagory/create',
  requireSignIn,
  isAuth,
  isAdmin,
  createCatagory
);

module.exports = router;