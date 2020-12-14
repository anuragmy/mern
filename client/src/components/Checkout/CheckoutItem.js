import "./checkout-item.styles.scss";
import { removeItem } from "../actions";
import { useDispatch, connect } from "react-redux";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-continer">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="quantity">
        <div className="arrow">&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow">&#10095;</div>
      </div>
      <div className="remove-button" onClick={() => dispatch(removeItem(item))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
