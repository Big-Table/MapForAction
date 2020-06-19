import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Card, Button } from "@material-ui/core";
import FlexColumn from "../Theme/FlexColumn";
import FlexRow from "../Theme/FlexRow";
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ActionsButtons from '../components/ActionsButton'
import AddTweetButton from '../components/addTweetButton'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'start',
    backgroundColor: "#000000",
    height: '100%',
    // fontFamily: "Work-Sans",
  },
  header:{
    color: '#707070',
    fontSize: 10,
    alignSelf: 'start',
    color: 'white', 
    fontSize: '20px',
    paddingLeft: '20px', 
    paddingBottom: '5px'
  },
  avatar: {
    height: 300,
    width: 430,
    borderRadius: 50,
    margin: 5,
    alignSelf: 'start',
  }, 
  reporter: {
    color: '#707070',
    fontSize: 15,
    margin: 5,
    alignSelf: 'start',
    paddingBottom: '10px'
    
  }, 
  title: {
    fontWeight: 700,
    color: "white",
    fontSize: 25,
    margin: 5,
    alignSelf: 'start',
    paddingLeft: '15px'

  }, 
  info: {
    alignSelf: 'start',
    paddingLeft: 15,
    padding: 5
  }, 
  smallPic: {
    height: '30px', 
    width: '30px', 
    borderRadius: '50%',
    color: 'white',
    border: 'solid',
    borderColor: 'grey', 
    borderWidth: 1
  }, 
  description: {
    color: '#707070',
    paddingLeft: '20px',
    paddingRight: '20px'
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
          <FlexRow className={classes.title}>
            {/* Title */}
              {incident.title}
          </FlexRow>
         
          <FlexRow style={{paddingLeft: '20px'}}>
            {/* tiny avatar, reported by: anonymous */}
            
            <PersonIcon className={classes.smallPic}></PersonIcon>
            <div className={classes.reporter}>Reported by: Anonymous</div>
            <div className={classes.reporter}>-</div>

            <div className={classes.reporter}>{incident? incident.date : "Date Unknown"} </div>
            {/* Locaiton: */}
            {/* {incident.Lat} { incident.lng} */}
          </FlexRow>
          <FlexRow>
            {/* tiny avatar, reported by: anonymous */}
            <Avatar variant="square" className={classes.avatar} alt="Remy Sharp" src={incident.image_url}/>
          </FlexRow>
          <br></br>
          <FlexRow className={classes.description}>
            {/* Details */}
              {incident.description}
          </FlexRow>
          <FlexRow>
            {/* Photo Gallery, maybe grid */}
            <ActionsButtons onClick={props.actionButton}/>
            <AddTweetButton onClick={props.tweetButton}/>

          </FlexRow>
        </FlexColumn>
      </Card>
    </Paper>
  );
};

export default IncidentDetails;
