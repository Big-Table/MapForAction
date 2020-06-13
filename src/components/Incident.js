import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    border: 1,
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "black",
    display: 'flex',
    justifyContent: 'start',
    height: '100px',
    overflow: 'scroll',
    backgroundColor: '#707070'

  },
  avatar: {
    height: 90,
    width: 100,
    borderRadius: 4,
    margin: 5,
  }, 
  info: {
    alignItems: 'start',
    paddingLeft: 15,
    padding: 5
  }
});

const Incident = (props) => {
  const classes = useStyles();
  return (
    <Paper>
      <Card className={classes.root}>
        <FlexColumn>
            <Avatar variant="square" className={classes.avatar} alt="Remy Sharp" src={props.image_url}>
            
          </Avatar>
          {/* <FlexRow>{props.image_url}</FlexRow> */}
        </FlexColumn>
        <FlexColumn className={classes.info}>
          <FlexRow>
              {props.date}
          </FlexRow>
          <FlexRow>
              {props.title}
          </FlexRow>
          <FlexRow>
              {props.description}
          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default Incident;
