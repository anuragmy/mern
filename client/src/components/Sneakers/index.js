import React from "react";
import { connect } from "react-redux";
import Shop from "../Shop";

const Sneakers = ({ items }) => {
  return <Shop incomingData={items} />;
};

const mapStateToProps = (state) => ({
  items: state.Initial.data.filter((item) => item.title === "sneakers"),
});

export default connect(mapStateToProps)(Sneakers);
