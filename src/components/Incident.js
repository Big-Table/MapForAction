import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    border: 1,
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "black",
    display: 'flex',
    justifyContent: 'start',
    height: '120px',
    backgroundColor: '#707070',
    fontFamily: 'Work Sans' + 'sans-serif',
    overflowY: 'auto'
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
  }, 
  info: {
    display: 'flex',
    alignItems: 'center',
    alignItems: 'start',
    paddingLeft: 10,
    // padding: 5
  }, 
  title: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: '20px'
  }
});

const Incident = (props) => {
  const classes = useStyles();
  return (
    <Paper>
      <Card className={classes.root}>
        <FlexColumn>
            <Avatar variant="square" className={classes.avatar} alt="" src={props.image_url}>
            
          </Avatar>
          {/* <FlexRow>{props.image_url}</FlexRow> */}
        </FlexColumn>
        <FlexColumn className={classes.info}>
          <FlexRow >
              {props.date}
          </FlexRow>
          <FlexRow className={classes.title}>
              {props.title}
          </FlexRow>
          <FlexRow>
              {props.description}
          </FlexRow>
          <FlexRow>
            <TwitterIcon style={{color: "#FCC42C"}}></TwitterIcon>
          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default Incident;
