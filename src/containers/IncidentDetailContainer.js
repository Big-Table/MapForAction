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

const IncidentDetailContainer = (props) =>  {

    const classes = useStyles()

        return(                    
            <FlexColumn>
                <IncidentDetails key={incident.id} {...props}/>
                {/* <Tweets/> */}
                {/* Actions */}
            </FlexColumn>
                
                
        )
    
}

export default IncidentDetailContainer;