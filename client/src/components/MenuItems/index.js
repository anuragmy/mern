import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
import "./menu-item.styles.scss";

const MenuItems = ({ title, size, image, url }) => {
  const historty = useHistory();
  return (
    <Grid item xs={12} sm={6} md={size === "large" ? 6 : 4}>
      <div className="item">
        <div
          className="background-image"
          style={{
            border: "1px solid black",
            height: 300,
            background: `url(${image}) center center`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="content"
            onClick={() => historty.push(`${url}`)}
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
        <style jsx="true">
          {`
            .item:hover background-image {
              transform: scale(1.1);
              transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            }
          `}
        </style>
      </div>
    </Grid>
  );
};

export default MenuItems;
