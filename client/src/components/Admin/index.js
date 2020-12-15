import React from "react";
import { connect } from "react-redux";
import "./admin.styles.scss";
import { UserDetails } from "./AdminDetails";

const Admin = ({ user }) => {
  return (
    <div className="checkout-page">
      <h2>Admin Details</h2>

      <div className="checkout-header">
        <div className="header-block">
          <span>NAME</span>
        </div>
        <div className="header-block">
          <span>EMAIL</span>
        </div>
      </div>
      <UserDetails user={user} />
      <br />
      <br />
    </div>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Admin);
