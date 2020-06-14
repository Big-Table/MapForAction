import React, { useState, useEffect } from "react";
import IncidentDetails from "../components/IncidentDetails";
import { makeStyles } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import TwitterContainer from "../containers/TwitterContainer";
import ActionsContainer from '../containers/ActionsContainer'

import Button from "@material-ui/core/Button"
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles({
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    alignItems: "start",
    backgroundColor: 'black'
  },
  gridItem: {
    width: "100%",
    backgroundColor: 'black'

  },
  paper: {
    height: '100%', 
    width: '100%',
    backgroundColor: 'black',
  },
  button: {
    color: '#707070',
    backgroundColor: 'black',
    marginTop: 20,
  }, 
  icon: {
    color: "#FCC42C"
  }
});



const IncidentDetailContainer = (props) => {
  const classes = useStyles();

  return (
    <FlexColumn className={classes.container}>
        {/* back-button */}
        <Button onClick={()=>props.deleteCurrentIncident()} className={classes.button}><CloseIcon className={classes.icon}></CloseIcon>Close</Button>
      <Paper className={classes.paper}>
        <Card>
        
          <IncidentDetails key={props.id} {...props} />
          {/* <Tweets/> */}
          {/* <TwitterContainer incident={props.incident} tweets={[{ url: "https://twitter.com/gratisteph/status/1272185222499573764"}, {url: "https://twitter.com/coder_blvck/status/1272185231030837250"}]}/> */}
          {/* <Actions/> */}
          <ActionsContainer incident={props.incident}/>
        </Card>
      </Paper>
    </FlexColumn>
  );
};

export default IncidentDetailContainer;
