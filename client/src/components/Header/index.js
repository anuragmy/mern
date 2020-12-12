import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => {
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

        <Link
          to="/signin"
          className="option"
          style={{ textDecoration: "none", color: "black", fontSize: "bold" }}
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
