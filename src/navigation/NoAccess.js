import React from 'react'
import {makeStyles} from '@material-ui/core'
import FlexColumn from '../Theme/FlexColumn'


const getStyles = makeStyles({
    root: {
        fontSize: 30,
        position: 'absolute',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        backgroundColor: '#fcc42c',
        left: '0%',
        zIndex: 10
    
    }
})



function NoAccess(){

    const classes = getStyles()
   
    return (
        <div className={classes.root}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div style={{textAlign: 'center'}}>
                    You do not have permission to access this. Please go back to the home screen.
                </div>
              
          
            <br></br>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a style={{color: 'black'}}href='/'>Back</a>

            </div>
        </div>
    )
}

export default NoAccess