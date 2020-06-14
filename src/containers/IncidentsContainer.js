import React from "react";
import Grid from "@material-ui/core/Grid";
import Incident from "../components/Incident";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        overflowY: 'scroll',
        width: "100%",
        height: '100%',
    },
    gridItem: {
        width: '100%',
    }
})
const renderIncidentsGrid = (incidents) => {
        return incidents.map((incident)=>{
            return(
                <Incident key={incident.id} {...incident}/>
            )
        })
    }

// const IncidentsContainer = (props) =>  {
//     const [incidents, setIncidents] = useState([])
//     useEffect(() => {
//         getIncidents()
//         .then(inc=> setIncidents(inc))
//     }, [])
//     const classes = useStyles()
    
//         return(                    
            
//             <Grid container className={classes.container} spacing={1} >
//                 <Grid className={classes.gridItem} item>
//                    {renderIncidentsGrid()}
//                 </Grid>
//             </Grid> 
                
//         )
    
// }

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
