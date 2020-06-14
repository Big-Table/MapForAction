import React from "react";
import Grid from "@material-ui/core/Grid";
import Incident from "../components/Incident";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    // paddingRight: 10
  },
  gridItem: {
    // flex: "grow",
    // display: 'flex',
    // justifyContent: 'center'
    width: "100%",
  },
});

const renderIncidentsGrid = (incidents) => {
  return incidents.map((incident) => {
    return <Incident key={incident.id} {...incident} />;
  });
};

const IncidentsContainer = ({ incidents }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={1}>
      <Grid className={classes.gridItem} item>
        {renderIncidentsGrid(incidents)}
      </Grid>
    </Grid>
  );
};

export default IncidentsContainer;
