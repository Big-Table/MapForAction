import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import PopperMenu from './PopperMenu'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        paddingTop: '10px',
        top: 0,
        height: 50,
        // display: 'flex',
        // justifyContent: 'space-between',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        
        
        // display: 'inline-block'
    },
    left: {
        paddingRight: '40px'
        // position: 'absolute',
        // display: 'flex',
        // justifyContent: 'space-between',
        // display: "inline-block",
        // marginRight: 200,
        // right: 10,

    },
    right: {
        // display: "inline-block",
    }, 
    search: {
        width: '100%',
        background: 'grey'
    }

})

const NavBar = props => {
    const history = useHistory()
    const classes = useStyles(props)

    const test = () => {

    }

    return(
       
        <div>
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <div className={classes.left}style={{ color: "#2A628F", fontSize: '40px' }}>
                        MapForAction
                    </div> 
                        <div className={classes.right}>
                            <span >
                                <PopperMenu />
                            </span>
                        </div> 
                </div>
               
            </div>
            <br></br>
            <TextField  className={classes.search} placeholder='search...' id="outlined-basic"  variant="outlined" />
        
        </div>
     
        )
}

export default NavBar