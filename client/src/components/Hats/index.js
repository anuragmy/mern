import React from "react";
import DATA from "../../data/data";
import Shop from "../Shop";

const Hats = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const hats = DATA.filter((data) => data.title === "Hats");
    setData(hats);
  }, []);

  return <Shop incomingData={data} />;
};

export default Hats;
