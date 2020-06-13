import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import PopperMenu from './PopperMenu'

const useStyles = makeStyles({
    root: {
        // position: 'fixed',
        // paddingTop: 20,
        top: 0,
        height: 50,
        // display: 'inline-block',
        display: 'flex',
        justifyContent: 'space-between',
    },
    wrapper: {
        display: 'inline-block'
    },
    // wrapper: {
    //     position: "relative"
    // },
    left: {
        display: "inline-block",
        marginRight: 250,
        left: 0,
        // fontSize: 40
    },
    right: {
        display: "inline-block",
        // float: "right",
        marginRight: '40px'
    },
    // flex: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     // width: 500,

    //     paddingTop: 10
    // },
    // welcome: {
    //     display: "inline-block"
    // },
    // linkAdjustment: {
    //     paddingTop: 10
    // }
})
const NavBar = props => {
    const history = useHistory()
    const classes = useStyles(props)

    const test = () => {

    }

    return(
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.left} style={{
                    color: "#FCC42C", fontSize: '20px' }}>
                    MapForAction
                </div> 
                    <div className={classes.right}>
                        <span >
                            <PopperMenu />
                        </span>
                    </div> 
            </div>
        </div>)
}

export default NavBar