const router = require('express').Router();

const { userById } = require('../controllers/user');
const { create, read, productById, remove, update } = require('../controllers/product');
const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth');



router.post('/product/create/:userId',
  requireSignIn,
  isAuth,
  isAdmin,
  create,
);
router.put('/product/:productId/:userId',
  requireSignIn,
  isAuth,
  isAdmin,
  update,
);
router.get('/product/:productId', read);
router.delete('/product/:productId/:userId',
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;