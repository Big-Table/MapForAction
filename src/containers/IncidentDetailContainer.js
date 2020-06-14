import React, { useState, useEffect } from "react";
import IncidentDetails from "../components/IncidentDetails";
import { makeStyles } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    alignItems: "start",
  },
  gridItem: {
    width: "100%",
  },
});

const IncidentDetailContainer = (props) => {
  const classes = useStyles();

  return (
    <FlexColumn className={classes.container}>
        {/* back-button */}
      <Paper>
        <Card>
          <IncidentDetails key={props.id} {...props} />
          {/* <Tweets/> */}
          {/* <Actions/> */}
        </Card>
      </Paper>
    </FlexColumn>
  );
};

export default IncidentDetailContainer;
