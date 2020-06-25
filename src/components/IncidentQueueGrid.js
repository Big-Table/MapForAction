import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import IncidentTable from './IncidentTable'
const useStyles = makeStyles({
    root: {
        position: 'absolute',
        textAlign: 'left',
        /* margin: 2px; */
        width: '100%',
        height: '100%',
        backgroundColor: '#fcc42c',
        // padding: '20px',
        left: '0%',
        zIndex: 10
        /* max-width: 50vh; */
        /* top: 25%;
        bottom: 25% */
    }, 
    closeButton: {
      
        color: 'black',
       backgroundColor: 'black'
    }, 
    span: {
        fontSize: '20px', 
        textAlign: 'center'
    }
})

function IncidentQueueGrid(props){

const classes = useStyles()



    return(
        <div className={classes.root}>
            <IncidentTable incidents={props.incidents} ></IncidentTable>
            <div>
             
            <button className={classes.closeButton}><Link to='/'>Back to Main Page</Link></button>
            
            </div>

        </div>
    )
}

export default IncidentQueueGrid