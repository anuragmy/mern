import React from "react";
import { connect } from "react-redux";
import Shop from "../Shop";

const Jackets = ({ items }) => {
  return <Shop incomingData={items} />;
};

const mapStateToProps = (state) => ({
  items: state.Initial.data.filter((item) => item.title === "jackets"),
});

export default connect(mapStateToProps)(Jackets);
