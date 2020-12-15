import { Link } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import "./user.styles.scss";

export const UserDetails = ({ user }) => {
  const { name, email } = user;
  return (
    <>
      <div className="checkout-item">
        <div className="name">{name}</div>
        <div className="price">{email}</div>
      </div>
      <div className="actions">
        <CustomButton>Add Catagory</CustomButton>
        <CustomButton>Add Product</CustomButton>
      </div>
    </>
  );
};

export const PurchaseDetails = ({ user }) => {
  return (
    <div className="checkout-item">
      <div className="name">{"Book"}</div>
      <div className="price">1</div>
      <div className="price">100</div>
      <div className="price">{new Date().getUTCDate()}</div>
    </div>
  );
};
