const { createOrder } = require("../controllers/orders");
const router = require("express").Router();

router.post("/order", createOrder);

module.exports = router;
