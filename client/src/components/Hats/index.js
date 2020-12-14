import React from "react";
import { connect } from "react-redux";
import Shop from "../Shop";

const Hats = ({ items }) => {
  return <Shop incomingData={items} />;
};

const mapStateToProps = (state) => ({
  items: state.Initial.data.filter((item) => item.title === "hats"),
});

export default connect(mapStateToProps)(Hats);

