import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import PopperMenu from './PopperMenu'
import TextField from '@material-ui/core/TextField';
import logo from './logo.png'
const useStyles = makeStyles({
    root: {
        width: '100%',
       
        height: 100,
        paddingTop: '10px'
        // display: 'flex',
        // justifyContent: 'space-between',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        
        
        // display: 'inline-block'
    },
    left: {
       paddingRight: '125px'
        // position: 'absolute',
        // display: 'flex',
        // justifyContent: 'space-between',
        // display: "inline-block",
        // marginRight: 200,
        // right: 10,

    },
    right: {
        paddingTop: '40px'
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
                    <div className={classes.left}>
                        <img style={{height: '100px', width: '250px'}}src={logo}></img>
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