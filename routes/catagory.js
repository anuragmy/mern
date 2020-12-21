const router = require("express").Router();

const {
  createCatagory,
  catagoryById,
  read,
  update,
  list,
  remove,
} = require("../controllers/catagory");
const { requireSignIn, isAdmin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post(
  "/catagory/create/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  createCatagory
);
router.put(
  "/catagory/:catagoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  update
);
router.delete(
  "/catagory/:catagoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);
router.get("/catagory/:catagoryId", read);
router.get("/catagories", list);

router.param("catagoryId", catagoryById);
router.param("userId", userById);

module.exports = router;
