const razorpay = require("razorpay");
require("dotenv").config();

exports.createOrder = (req, res) => {
  const { total } = req.body;
  console.log(total);
  const options = {
    amount: total,
    currency: "INR",
    receipt: `order_${new Date().getTime()}_${total}`,
  };
  const instance = new razorpay({
    key_id: "rzp_test_xAFQxHiOLuQufC",
    key_secret: "gxbsudANND07YkZA60mIbvnN",
  });
  instance.orders.create(options, (err, order) => {
    console.log(order);
    if (err)
      return res.status(500).json({
        message: "Something went wrong!",
      });
    return res.status(200).json({ order });
  });
};
