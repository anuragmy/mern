import React from "react";
import { connect } from "react-redux";
import Shop from "../Shop";

const Womens = ({ items }) => {
  return <Shop incomingData={items} />;
};

const mapStateToProps = (state) => ({
  items: state.Initial.data.filter((item) => item.title === "womens"),
});

export default connect(mapStateToProps)(Womens);
