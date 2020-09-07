import { Card, makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import FlexColumn from "../../Theme/FlexColumn";
import FlexRow from "../../Theme/FlexRow";
import Moment from "react-moment";

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
    cursor: "pointer",
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 10,
    margin: 10,
    border: "solid",
    borderColor: "#FCC42C",
  },
  info: {
    display: "flex",
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
    <Paper
      onClick={() => {
        props.setCurrentIncident(props.incident);
        props.setMapCenter({
          lat: parseFloat(props.incident.lat),
          lng: parseFloat(props.incident.lng),
        });
      }}
    >
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
          <FlexRow>
            {props.incident.date && (
              <Moment date={props.incident.date} format="MM/DD/YYYY" />
            )}
          </FlexRow>
          <FlexRow className={classes.title}>{props.incident.title}</FlexRow>
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
