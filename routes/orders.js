const { createOrder } = require("../controllers/orders");
const router = require("express").Router();
const { requireSignIn, isAuth } = require("../controllers/auth");

router.post("/order", requireSignIn, isAuth, createOrder);

module.exports = router;
