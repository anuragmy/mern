const router = require("express").Router();
const { getRestaunts } = require("../controllers/restraunts");
const { isAuth } = require("../controllers/auth");

router.get("/products", isAuth, getRestaunts);

module.exports = router;
