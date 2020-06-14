import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {

    }
})

const Action = props => {
    const classes = useStyles(props)


    return (
        <div>
            <div className={classes.root}> 
            </div>
        </div>
    )
}

export default Action