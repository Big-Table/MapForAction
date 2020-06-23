import React from 'react'
import {makeStyles} from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import IncidentTable from './IncidentTable'
const useStyles = makeStyles({
    root: {
        position: 'absolute',
        textAlign: 'left',
        /* margin: 2px; */
        width: '75%',
        height: '85%',
        backgroundColor: '#fcc42c',
        padding: '20px',
        top: '60px',
        left: '10%',
        zIndex: 10
        /* max-width: 50vh; */
        /* top: 25%;
        bottom: 25% */
    }, 
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '30px',
        zIndex: 15
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
            <h5 className={classes.span}>Pending Incidents for Moderator Approval</h5>
            <br></br>
            <IncidentTable incident={props.incident} ></IncidentTable>
            <div>
                <CloseIcon
                    id="close-button"
                    onClick={props.grid}
                    style={{ cursor: "pointer" }}
                />
            </div>

        </div>
    )
}

export default IncidentQueueGrid