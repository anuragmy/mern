// import React from "react";
// import Shop from "../Shop";
import { connect } from "react-redux";

const Hats = ({ data }) => {
  console.log(data);
  return "hi";
  // const [item, setItem] = React.useState([]);

  // React.useEffect(() => {
  //   const hats = data.filter((item) => item.title === "Hats");
  //   setItem(hats);
  // }, [data]);

  // return <Shop incomingData={item} />;
};

const mapStateToProps = ({ Initial: { data } }) => ({
  data,
});

export default connect(mapStateToProps, null)(Hats);
