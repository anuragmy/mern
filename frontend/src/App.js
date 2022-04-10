// import logo from './logo.svg';
import "./App.css";
import Login from "./Login";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {localStorage.getItem("token") ? <App /> : <Login />}
      </Grid>
    </Grid>
  );
};

export default App;
