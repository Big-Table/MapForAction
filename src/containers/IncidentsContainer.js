import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Incident from '../components/Incident'
import {makeStyles, Grow} from '@material-ui/core'
import {getIncidents} from '../requests/requests.js'
import FlexColumn from '../Theme/FlexColumn'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    container: {
        overflowY: 'scroll',
        width: "100%",
        height: '100%',
    },
    gridItem: {
        width: '100%',

    },
  
})

const IncidentsContainer = (props) =>  {
    const text = props.search
  
    const classes = useStyles()

    const renderIncidentsGrid = () => {
        if(text === ''){
            return props.incidents.map((incident)=>{
                return(
                    <div>
                    
                    <Incident key={incident.id} {...incident}/>
                    <br></br>
                    </div>
                )
            })
        } else {
                let results = props.incidents.filter(inc => 
                inc.title.toLowerCase().includes(text.toLowerCase())
                )
                return results.map((incident) => {
                    return(
                        <div>
                        <Incident key={incident.id} {...incident}/>
                        <br></br>
                        </div>
                    )
                })
        }
           
    }

   
    
       
    

        return(                    
            <Grid container className={classes.container} spacing={1} >
                {/* <span className={classes.span}>Recent Incidents</span> */}
                <Grid className={classes.gridItem} item>
                   {renderIncidentsGrid()}
                </Grid>
            </Grid> 
        )
    
}

export default IncidentsContainer;