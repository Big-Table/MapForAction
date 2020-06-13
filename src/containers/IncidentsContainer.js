import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})
const IncidentsContainer = (props) =>  {
    const classes = useStyles(props)
        return(                    
            
            <Grid container className={classes.root} spacing={3} >
                <Grid item>
                    Hello
                </Grid>
            </Grid> 
                
        )
    
}

export default IncidentsContainer;