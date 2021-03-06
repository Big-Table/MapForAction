import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import IncidentDetails from "../components/incidentDetails/IncidentDetails";
import TweetForm from "../components/forms/TweetForm";
import ActionsContainer from "../containers/ActionsContainer";
import TwitterContainer from "../containers/TwitterContainer";
import FlexColumn from "../Theme/FlexColumn";

const useStyles = makeStyles({
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    alignItems: "start",
    backgroundColor: "black",
  },
  gridItem: {
    width: "100%",
    backgroundColor: "black",
  },
  paper: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  button: {
    color: "#707070",
    backgroundColor: "black",
    marginTop: 20,
  },
  icon: {
    color: "#FCC42C",
  },
  overlay: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 5,
    cursor: "pointer",
  },
});

const IncidentDetailContainer = (props) => {
  const classes = useStyles();
  const [formState, setFormState] = useState(true);
  const [tweetState, setTweetState] = useState(false);

  const handleClick = () => {
    setFormState(!formState);
  };

  const handleTweet = () => {
    setTweetState(!tweetState);
  };

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <FlexColumn className={classes.container}>
      {/* back-button */}
      {formState ? (
        <Button
          className={classes.button}
          onClick={() => props.deleteCurrentIncident()}
        >
          <CloseIcon className={classes.icon}></CloseIcon>Close
        </Button>
      ) : (
        <Button className={classes.button} onClick={handleClick}>
          <ChevronLeftIcon className={classes.icon}></ChevronLeftIcon>Go Back
        </Button>
      )}

      <Paper className={classes.paper}>
        <Card>
          {formState ? (
            <>
              <IncidentDetails
                key={props.id}
                {...props}
                tweetButton={handleTweet}
                actionButton={handleClick}
                currentUser={props.currentUser}
              />
              <div className={classes.container}>
                {tweetState && (
                  <TweetForm
                    incident={props.incident}
                    tweetButton={handleTweet}
                  ></TweetForm>
                )}
                {tweetState && <div className={classes.overlay}></div>}
                <TwitterContainer
                  tweetButton={handleTweet}
                  incident={props.incident}
                  currentUser={props.currentUser}
                />
              </div>
            </>
          ) : (
            <ActionsContainer
              refresh={handleRefresh}
              incident={props.incident}
              currentUser={props.currentUser}
            />
          )}
        </Card>
      </Paper>
    </FlexColumn>
  );
};

export default IncidentDetailContainer;
