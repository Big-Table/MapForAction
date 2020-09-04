import { makeStyles } from "@material-ui/core";
import React from "react";

const getStyles = makeStyles({
  root: {
    fontSize: 30,
    position: "absolute",
    textAlign: "left",
    width: "100%",
    height: "100%",
    backgroundColor: "#fcc42c",
    left: "0%",
    zIndex: 10,
  },
});

function NotFound() {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ textAlign: "center" }}>This Page Does Not Exist!</div>

      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a style={{ color: "black" }} href="/">
          Back
        </a>
      </div>
    </div>
  );
}

export default NotFound;
