/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import MenuItems from "../MenuItems";
import "./directory.styles.scss";

const Directory = ({ data = [] }) => {
  return (
    <Grid container spacing={2} style={{ width: "90vw" }}>
      {data.map(({ title, id, imageUrl, size, linkUrl }) => (
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

const mapStateToProps = ({ Initial: { data } }) => ({
  data,
});

export default connect(mapStateToProps, null)(Directory);
