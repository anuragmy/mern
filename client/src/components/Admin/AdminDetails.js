import { useHistory } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import "./user.styles.scss";

export const UserDetails = ({ user }) => {
  const history = useHistory();
  const { name, email } = user;
  return (
    <>
      <div className="checkout-item">
        <div className="name">{name}</div>
        <div className="price">{email}</div>
      </div>
      <div className="actions" style={{ padding: 20 }}>
        <CustomButton
          onClick={() => history.push("/admin/add-catagory")}
          style={{ margin: 20 }}
        >
          Add Catagory
        </CustomButton>
        <CustomButton
          onClick={() => history.push("/product")}
          style={{ margin: 20 }}
        >
          Add Product
        </CustomButton>
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
