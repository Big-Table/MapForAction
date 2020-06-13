import React from 'react'
import { makeStyles } from '@material-ui/core'
 
const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: 10,
        backgroundColor: "#000000",
        color: "#FCC42C",
        borderStyle: "solid",
        borderColor: "#FCC42C",
        borderWidth: 1,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontFamily: 'Work Sans',
        fontWeight: 700,
        cursor: "pointer"
    }
})
const AddIncidentButton = props => {
    const classes = useStyles()

    return (
        <button className={classes.root} onClick={props.onClick}>
            + Report an Incident
        </button>
    )
}

export default AddIncidentButton