import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";
import Avatar from "@material-ui/core/Avatar";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  root: {
    border: 1,
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "black",
    display: "flex",
    justifyContent: "start",
    height: "150px",
    backgroundColor: "#212121",
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 10,
    margin: 10,
  },
  info: {
    display: "flex",
    alignItems: "center",
    alignItems: "start",
    paddingLeft: 10,
    color: "#898989",
    // padding: 5
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
});

const Incident = (props) => {
  const classes = useStyles();
  return (
    <Paper onClick={() => props.setCurrentIncident(props.incident)}>
      <Card className={classes.root}>
        <FlexColumn>
          <Avatar
            variant="square"
            className={classes.avatar}
            alt=""
            src={props.incident.image_url}
          ></Avatar>
          {/* <FlexRow>{props.image_url}</FlexRow> */}
        </FlexColumn>
        <FlexColumn className={classes.info}>
          <FlexRow >
              {props.incident.date}
          </FlexRow>
          <FlexRow className={classes.title}>
              {props.incident.title}
          </FlexRow>
          {/* <FlexRow style={{overflow: 'auto', maxHeight: '80px', width: '275px'}}>
              {props.incident.description}
          </FlexRow> */}
          <FlexRow>
            <TwitterIcon style={{ color: "#FCC42C" }}></TwitterIcon>
          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default Incident;
