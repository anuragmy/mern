import React from "react";
import DATA from "../../data/data";
import Shop from "../Shop";

const Sneakers = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const hats = DATA.filter((data) => data.title === "Sneakers");
    setData(hats);
  }, []);

  return <Shop incomingData={data} />;
};

export default Sneakers;
