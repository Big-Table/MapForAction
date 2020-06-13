import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";

const useStyles = makeStyles({
  root: {
    border: 1,
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "black",
    flex: "grow",
  },
});

const Incident = (props) => {
  const classes = useStyles();
  return (
    <Paper>
      <Card className={classes.root}>
        <FlexColumn>
          <FlexRow>{props.image_url}</FlexRow>
          <FlexRow>{`Title: ${props.title}`} </FlexRow>
        </FlexColumn>
        <FlexColumn>{`Date: ${props.date}`}</FlexColumn>
        <FlexColumn>{`Description ${props.description}`}</FlexColumn>
      </Card>
    </Paper>
  );
};

export default Incident;
