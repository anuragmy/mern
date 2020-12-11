/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import "tachyons";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return setErrors(errors.concat({ err: "All Fields Required" }));
    await axios
      .post("/sign-in", { email, password })
      .then((res) => console.log("signed in", res));
  };
  return (
    <Container style={{ marginTop: "5%" }}>
      <Grid
        item
        xs={12}
        style={{ width: 500, marginLeft: "auto", marginRight: "auto" }}
      >
        <h1>Have an account ?</h1>
        <h3 style={{ fontWeight: "lighter" }}>
          Sign In wth your email and password
        </h3>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: 20, fontWeight: "bolder" }}>Email</label>
          <br />
          <input
            type="email"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              padding: 10,
              marginBottom: 20,
              fontSize: 20,
              width: "80%",
            }}
            value={email}
            onChange={changeEmail}
          />
          <br />
          <br />
          <label style={{ fontSize: 20, fontWeight: "bolder" }}>Password</label>
          <br />
          <input
            type="password"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              padding: 10,
              marginBottom: 20,
              fontSize: 20,
              width: "80%",
            }}
            value={password}
            onChange={changePassword}
          />
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
              Sign In
            </span>
          </a>
          <a
            style={{
              marginLeft: 20,
              marginRight: "auto",
              cursor: "pointer",
              textAlign: "center",
            }}
            className="f5 no-underline black bg-animate hover-bg-blue hover-white inline-flex items-center pa3 ba border-box mr4"
            onClick={handleSubmit}
          >
            <span className="pl1" style={{ fontSize: 20 }}>
              Sign In with Google
            </span>
          </a>
        </form>
        <h3>
          Dont' have an account?{" "}
          <Link to="/signup" style={{ color: "black" }}>
            Sign Up
          </Link>
        </h3>
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

export default SignIn;
