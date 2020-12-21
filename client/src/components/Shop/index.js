/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import Collections from "../Collections";
import { Route } from "react-router-dom";

const Shop = ({ incomingData = [], data }) => {
  return incomingData.length > 0 ? (
    <Container>
      <h1>Collections</h1>
      {data.map(({ title, id, items }) => (
        <div key={id}>
          <h2>{title}</h2>
          <Collections items={items} />
        </div>
      ))}
      ;
    </Container>
  ) : (
    <Container>
      <h1>Collections</h1>
      {data.map(({ title, id, items }) => (
        <div key={id}>
          <h2>{title}</h2>
          <Collections items={items} />
        </div>
      ))}
      ;
    </Container>
  );
};

const mapStateToPops = ({ Initial: { data } }) => ({
  data,
});

export default connect(mapStateToPops, null)(Shop);
