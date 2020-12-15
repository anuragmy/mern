import React from "react";
import { connect } from "react-redux";
import Shop from "../Shop";

const Mens = ({ items }) => {
  return <Shop incomingData={items} />;
};

const mapStateToProps = (state) => ({
  items: state.Initial.data.filter((item) => item.title === "mens"),
});

export default connect(mapStateToProps)(Mens);
