import React from "react";
import { Grid } from "@material-ui/core";
import "./menu-item.styles.scss";

const MenuItems = ({ title, size, image }) => {
  return (
    <Grid item xs={12} sm={6} md={size === "large" ? 6 : 4}>
      <div
        className="item"
        style={{
          border: "1px solid black",
          height: 300,
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: 120,
            border: "1px solid black",
            textAlign: "center",
            padding: 5,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15%",
            paddingBottom: 20,
            backgroundColor: "white",
            opacity: 0.8,
            cursor: "pointer",
          }}
        >
          <h2 style={{ marginBottom: 2, fontFamily: "Open Sans Condensed" }}>
            {title.toUpperCase()}
          </h2>
          <span style={{ marginBottom: 10 }}>Shop Now</span>
        </div>
      </div>
    </Grid>
  );
};

export default MenuItems;
