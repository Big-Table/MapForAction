import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'start',
    backgroundColor: "#707070",
    height: '300px',
    fontFamily: "work-sans",
  },
  header:{
    color:"'#707070'",
    fontSize: 10,
    alignSelf: 'start',
  },
  avatar: {
    height: 15,
    width: 20,
    borderRadius: 50,
    margin: 5,
    alignSelf: 'start',
  }, 
  reporter: {
    color: '#707070',
    fontSize: 9,
    margin: 5,
    alignSelf: 'start',
  }, 
  title: {
    fontWeight: 700,
    color: "white",
    fontSize: 9,
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
        <FlexColumn style={{justifyContent: "start", alignItems:"start"}}>
          <FlexRow className={classes.header}>
            {incident? incident.date : "Date Unknown"} 
            {/* Locaiton: */}
            {/* {incident.Lat} { incident.lng} */}
          </FlexRow>
          <FlexRow>
            {/* tiny avatar, reported by: anonymous */}
            <Avatar variant="square" className={classes.avatar} alt="Remy Sharp" src={incident.image_url}/>
            <div className={classes.reporter}>Reported by: Anonymous</div>
          </FlexRow>
          <FlexRow className={classes.title}>
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
