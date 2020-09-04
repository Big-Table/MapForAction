import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Incident from "../components/incidentDetails/Incident";

const useStyles = makeStyles({
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
  },
  gridItem: {
    width: "100%",
  },
});

const IncidentsContainer = (props) => {
  let text = props.search;

  const classes = useStyles();

  const renderIncidentsGrid = () => {
    if (text === "") {
      return props.incidents.map((incident) => {
        return (
          <div>
            <Incident
              setCurrentIncident={props.setCurrentIncident}
              setMapCenter={props.setMapCenter}
              key={incident.id}
              incident={incident}
            />
            <br></br>
          </div>
        );
      });
    } else {
      let results = props.incidents.filter((inc) =>
        inc.title.toLowerCase().includes(text.toLowerCase())
      );
      return results.map((incident) => {
        return (
          <div>
            <Incident
              setCurrentIncident={props.setCurrentIncident}
              setMapCenter={props.setMapCenter}
              key={incident.id}
              incident={incident}
            />
            <br></br>
          </div>
        );
      });
    }
  };

  return (
    <Grid container className={classes.container} spacing={1}>
      {/* <span className={classes.span}>Recent Incidents</span> */}
      <Grid className={classes.gridItem} item>
        {renderIncidentsGrid()}
      </Grid>
    </Grid>
  );
};

export default IncidentsContainer;
