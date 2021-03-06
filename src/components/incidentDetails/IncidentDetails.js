import { Card, makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Moment from "react-moment";
import FlexColumn from "../../Theme/FlexColumn";
import FlexRow from "../../Theme/FlexRow";
import ActionsButtons from "../buttons/ActionsButton";
import AddTweetButton from "../buttons/addTweetButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "start",
    backgroundColor: "#000000",
    height: "100%",
    width: "100%",
    // fontFamily: "Work-Sans",
  },
  header: {
    color: "#707070",
    fontSize: 10,
    alignSelf: "start",
    paddingLeft: "20px",
    paddingBottom: "5px",
  },
  avatar: {
    height: "400px",
    width: "90%",
    borderRadius: 50,
    margin: 5,
    alignSelf: "start",
    border: "solid",
    borderColor: "#FCC42C",
  },
  reporter: {
    color: "#707070",
    fontSize: 15,
    margin: 5,
    alignSelf: "start",
    paddingBottom: "10px",
  },
  title: {
    fontWeight: 700,
    color: "white",
    fontSize: 25,
    margin: 5,
    alignSelf: "start",
    paddingLeft: "15px",
  },
  info: {
    alignSelf: "start",
    paddingLeft: 15,
    padding: 5,
  },
  smallPic: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    color: "white",
    border: "solid",
    borderColor: "grey",
    borderWidth: 1,
  },
  description: {
    color: "#707070",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

const IncidentDetails = (props) => {
  const classes = useStyles();
  let incident = props.incident;

  // const userNotLoggedIn = () => {
  //   alert('Sign in through Google to submit a tweet!')
  // }
  return (
    <Paper>
      <Card className={classes.root}>
        <FlexColumn style={{ justifyContent: "start", alignItems: "start" }}>
          <FlexRow className={classes.title}>
            {/* Title */}
            {incident.title}
          </FlexRow>

          <FlexRow style={{ paddingLeft: "20px" }}>
            {/* tiny avatar, reported by: anonymous */}

            <Avatar
              src={incident.profilePicture}
              className={classes.smallPic}
            ></Avatar>
            <div className={classes.reporter}>
              Reported by:{" "}
              {incident.firstName ? incident.firstName : "Anonymous"}
            </div>
            <div className={classes.reporter}>-</div>

            <div className={classes.reporter}>
              {incident.date ? (
                <Moment format="MM/DD/YYYY" date={incident.date} />
              ) : (
                "Date Unknown"
              )}{" "}
            </div>
            {/* Locaiton: */}
            {/* {incident.Lat} { incident.lng} */}
          </FlexRow>
          <FlexRow>
            {/* tiny avatar, reported by: anonymous */}
            <Avatar
              variant="square"
              className={classes.avatar}
              alt={incident.title}
              src={incident.image_url}
            />
          </FlexRow>
          <br></br>
          <FlexRow className={classes.description}>
            {/* Details */}
            {incident.description}
          </FlexRow>
          <FlexRow>
            {/* Photo Gallery, maybe grid */}
            <ActionsButtons onClick={props.actionButton} />

            <AddTweetButton
              currentUser={props.currentUser}
              tweetButton={props.tweetButton}
            />
          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default IncidentDetails;
