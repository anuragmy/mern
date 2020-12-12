/* eslint-disable no-unused-vars */
import React from "react";
import { Grid } from "@material-ui/core";
import MenuItems from "../MenuItems";
import "./directory.styles.scss";

const Directory = () => {
  const [items, setItems] = React.useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "/shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "/shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "/shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "/shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "/shop/mens",
    },
  ]);

  return (
    <Grid container spacing={2} style={{ width: "90vw" }}>
      {items.map(({ title, id, imageUrl, size, linkUrl }) => (
        <MenuItems
          title={title}
          key={id}
          image={imageUrl}
          url={linkUrl}
          size={size}
        />
      ))}
    </Grid>
  );
};

export default Directory;
