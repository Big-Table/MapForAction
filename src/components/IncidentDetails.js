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
    height: '300px',
    backgroundColor: '#707070'
  },
  header:{
    color:"white",
    fontSize: 10,
    alignSelf: 'start',
  },
  avatar: {
    height: 30,
    width: 50,
    borderRadius: 4,
    margin: 5,
    alignSelf: 'start',
  }, 
  info: {
    alignSelf: 'start',
    paddingLeft: 15,
    padding: 5
  }
});

const IncidentDetails= (props) => {
  const classes = useStyles();
  console.log("details",props)
  let incident = props.incident
  return (
    <Paper>
      <Card className={classes.root}>
        <FlexColumn>
          <FlexRow className={classes.header}>
            {/* date, location */}
            {incident? incident.date : "Date Unknown"} {incident.Lat} { incident.lng}
          </FlexRow>
          <FlexRow>
            {/* tiny avatar, reported by: anonymous */}
            <Avatar variant="square" className={classes.avatar} alt="Remy Sharp" src={incident.image_url}/>
          </FlexRow>
          <FlexRow>
            {/* Title */}
              {incident.title}
          </FlexRow>
          <FlexRow>
            {/* Details */}
              {incident.description}
          </FlexRow>
          <FlexRow>
            {/* Photo Gallery, maybe grid */}
          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default IncidentDetails;
