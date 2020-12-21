/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./dashboard.styles.scss";
import { UserDetails } from "./UserDetails";
import { PurchaseDetails } from "./UserDetails";

const Dashboard = ({ user }) => {
  return (
    <div className="checkout-page">
      <h2>User Details</h2>

      <div className="checkout-header">
        <div className="header-block">
          <span>NAME</span>
        </div>
        <div className="header-block">
          <span>EMAIL</span>
        </div>
        <div className="header-block">
          <span>ROLE</span>
        </div>
      </div>
      <UserDetails user={user} />
      <br />
      <br />
      <h2>Purchase history</h2>
      <div className="checkout-header">
        <div className="header-block">
          <span>item</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>total</span>
        </div>
        <div className="header-block">
          <span>Date</span>
        </div>
      </div>
      <PurchaseDetails user={user} />
    </div>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default connect(mapStateToProps)(Dashboard);
