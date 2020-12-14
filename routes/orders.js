const { createOrder } = require("../controllers/orders");
const { requireSignIn, isAuth } = require("../controllers/auth");
const router = require("express").Router();

router.post("/order", requireSignIn, isAuth, createOrder);

module.exports = router;
