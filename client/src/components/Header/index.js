import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { signOut } from "../actions";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import Cart from "../Cart";
import CartDropdown from "../Cart/CartDropdown";

const Header = ({ token, cart, auth }) => {
  const dispatch = useDispatch();
  const [signout, setSignOut] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) return setSignOut(true);
  }, [token]);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link
          to="/"
          className="option"
          style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="option"
          style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
        >
          SHOP
        </Link>
        {token && auth.user && auth.user.roles === 0 && (
          <Link
            to="/dashboard"
            className="option"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "bold",
            }}
          >
            DASHBOARD
          </Link>
        )}
        {token && auth.user && auth.user.roles === 1 && (
          <Link
            to="/admin"
            className="option"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "bold",
            }}
          >
            DASHBOARD
          </Link>
        )}

        {token ? (
          <Link
            to="/"
            onClick={() => {
              setSignOut(false);
              dispatch(signOut());
            }}
            className="option"
            style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link
            to="/signin"
            className="option"
            style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
          >
            SIGN IN
          </Link>
        )}
        <Cart method="hidecart" />
      </div>
      {cart.hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Header);
