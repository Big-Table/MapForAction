import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Incident from '../components/Incident'
import {makeStyles, Grow} from '@material-ui/core'
import {getIncidents} from '../requests/requests.js'
import FlexColumn from '../Theme/FlexColumn'

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

const IncidentsContainer = (props) =>  {
    const [incidents, setIncidents] = useState([])
    useEffect(() => {
        getIncidents()
        .then(inc=> setIncidents(inc))
    }, [])
    const classes = useStyles()
    const renderIncidentsGrid = () => {
        return incidents.map((incident)=>{
            return(
                <Incident key={incident.id} {...incident}/>
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