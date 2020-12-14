import "./checkout-item.styles.scss";
const CheckoutItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-continer">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="quantity">{quantity}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
