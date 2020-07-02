import React from 'react'
import { makeStyles } from '@material-ui/core'
 
const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: 10,
        right: '60%',
        zIndex: 4,
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
        cursor: "pointer",
        outline: "none"
    }
})
const AddWhatsNextButton = props => {
    const classes = useStyles(props)

    return (
        <button className={classes.root} onClick={props.onClick}>
            FAQ / Whats Next
        </button>
    )
}

export default AddWhatsNextButton