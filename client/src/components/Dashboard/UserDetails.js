import "./user.styles.scss";

export const UserDetails = ({ user }) => {
  const { name, email, roles } = user;
  return (
    <div className="checkout-item">
      <div className="name">{name}</div>
      <div className="price">{email}</div>
      <div className="name">{roles === 0 ? "User" : "Admin"}</div>
    </div>
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
