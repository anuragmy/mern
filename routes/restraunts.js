const router = require("express").Router();
const { getRestaunts } = require("../controllers/restraunts");

router.get("/products/", getRestaunts);

module.exports = router;
