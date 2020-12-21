/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { addCatagory } from "../actions";
// import GoogleLogin from "react-google-login";
import "tachyons";

const AddCatagory = ({ loading, user, user_id = "" }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [type, setType] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(addCatagory(type, user, user_id));
  };
  const handleChange = (e) => setType(e.target.value);

  return (
    <Container style={{ marginTop: "5%" }}>
      <Grid
        item
        xs={12}
        style={{ width: 500, marginLeft: "auto", marginRight: "auto" }}
      >
        <h1>Add Catagory</h1>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: 20, fontWeight: "bolder" }}>Catagory</label>
          <br />
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              paddingTop: 20,
              marginBottom: 20,
              fontSize: 20,
              width: "80%",
            }}
            value={type}
            onChange={handleChange}
          />
          <br />
          <br />

          <br />

          <a
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              cursor: "pointer",
              textAlign: "center",
            }}
            className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
            onClick={handleSubmit}
          >
            <span className="pl1" style={{ fontSize: 20 }}>
              Add
            </span>
          </a>
          <a
            style={{
              marginLeft: 20,
              marginRight: "auto",
              cursor: "pointer",
              textAlign: "center",
            }}
            className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
            onClick={() => history.push("/admin")}
          >
            <span className="pl1" style={{ fontSize: 20 }}>
              Cancel
            </span>
          </a>
        </form>
      </Grid>
      <style jsx="true">
        {`
          input:focus {
            outline: none;
          }
        `}
      </style>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.authLoading,
  user: state.auth.token,
  user_id: state.auth.user._id,
});

export default connect(mapStateToProps, null)(AddCatagory);
