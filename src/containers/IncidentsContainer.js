import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Incident from '../components/Incident'
import {makeStyles, Grow} from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        width: "40%",
    },
    gridItem: {
        flex: "grow",
    }
})

const IncidentsContainer = (props) =>  {
    const [incidents, setIncidents] = useState()
    useEffect(() => {
            fetch("http://localhost:3000/incidents")
            .then(resp=> resp.json())
            .then(i => console.log(i))
            // (incidents)=> setIncidents((prevState)=> ({incidents: [incidents]}) )
    }, [])
    const classes = useStyles()
    const accidents = [{title:"bad", description:"things happened", location:"1232,1223"},{title:"worse", description:"things happened", location:"54,184"}]
    const renderIncidentsGrid = () => {
        return accidents.map((incident)=>{
            return(
                <Incident key={incident.location} {...incident}/>
            )
        })
    }
        return(                    
            
            <Grid container className={classes.container} spacing={1} >
                <Grid className={classes.gridItem} item>
                   {renderIncidentsGrid()}
                </Grid>
            </Grid> 
                
        )
    
}

export default IncidentsContainer;