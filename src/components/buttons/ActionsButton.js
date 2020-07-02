import { makeStyles } from '@material-ui/core'
import React from 'react'
 
const useStyles = makeStyles({
    root: {
        margin: 30,
        top: 10,
        right: '16%',
        zIndex: 4,
        backgroundColor: "#FCC42C",
        color: "#000000",
        borderStyle: "solid",
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontWeight: 700,
        cursor: "pointer",
        outline: "none"
    }
})
const ActionsButton = props => {
    const classes = useStyles(props)

    return (
        <button className={classes.root} onClick={props.onClick}>
            Take Action!
        </button>
    )
}

export default ActionsButton