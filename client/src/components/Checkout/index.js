/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { message, Empty } from "antd";
import StripeCheckout from "react-stripe-checkout";
import "./checkout.styles.scss";
import CheckoutItem from "./CheckoutItem";
import Crown from "../../assets/crown.svg";
import Cart from "../../assets/cart.svg";
import { CustomButton } from "../CustomButton";

const Checkout = ({ total, items = [], signedIn }) => {
  const [order, setOrder] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const key =
    "pk_test_51HyD5aBnS2wHQRCVoqnLYfvvSUbCSK5Gr4FFwILFlTjvUCHuHacBB3eFG2X1qeWMCEvsVT9fpq9cpiE6Qwqtnz5Y00OBcCAgbH";

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const showRazorpay = async () => {
    await loadRazorpay();
    axios
      .post("/api/order", { total: total * 100 })
      .then((resp) => {
        console.log("res", resp);
        setOrder(resp.data.id);
        setAmount(resp.data.order.amount);
        const options = {
          key: "rzp_test_xAFQxHiOLuQufC",
          amount: resp.data.order.amount,
          currency: "INR",
          name: "Crown Clothing",
          description: "Test Transaction",
          image: { Crown },
          save: 1,
          order_id: resp.data.order.id,
          handler: async (response) => {
            // getting on success
            const paymentId = response.razorpay_payment_id;
            const orderId = response.razorpay_order_id;
            const signature = response.razorpay_signature;
            console.log(paymentId, orderId, signature);
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#21BA45",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", (resp) => {
          console.log(resp.error.code);
          console.log(resp.error.description);
          console.log(resp.error.source);
          console.log(resp.error.step);
          console.log(resp.error.reason);
          console.log(resp.error.metadata);
        });
      })
      .catch((err) => console.log(err));
  };

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  const alertMesage = () => message.warn("Please sign in before payment");

  return !items.length ? (
    <Empty description="Please add items in your cart" image={Cart} />
  ) : (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>PRODUCT</span>
          </div>
          <div className="header-block">
            <span>PRICE</span>
          </div>
          <div className="header-block">
            <span>QUANTITY</span>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>
        <div className="total">
          <span>TOTAL: &#x20B9; {total}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <CustomButton
            onClick={showRazorpay}
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            PROCEED TO PAY
        </CustomButton>
          <style jsx="true">
            {`
            .ant-empty-description {
              margin-top: 30px;
            }
          `}
          </style>
          {/* <StripeCheckout
          name="Crown Clothing" // the pop-in header title
          description={`Your total is ${total}`} // the pop-in header subtitle
          image={Crown}
          ComponentClass="div"
          label="Pay with Stripe" // text inside the Stripe button
          panelLabel="Pay Now" // text inside the Stripe button
          amount={total * 100} // cents
          currency="INR"
          email="anuragmy2729@gmail.com"
          shippingAddress
          zipCode
          allowRememberMe // "Remember Me" option (default true)
          token={onToken} // submit callback
          stripeKey={key}
        /> */}
        </div>
      </div>
    );
};

const mpaStateToProps = ({ cart: { items }, auth: { signedIn } }) => ({
  total: items.reduce((acc, item) => acc + item.quantity * item.price, 0),
  items,
  signedIn,
});

export default connect(mpaStateToProps, null)(Checkout);
