const { createOrder } = require("../controllers/orders");
const router = require("express").Router();
const { requireSignIn, isAuth } = require("../controllers/auth");

router.post("/order", createOrder);

module.exports = router;
