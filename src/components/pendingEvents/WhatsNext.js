import React from 'react'
import {makeStyles} from '@material-ui/core'

const getStyles = makeStyles({
    root: {
        position: "absolute",
        textAlign: "left",
        /* margin: 2px; */
        width: "45%",
        height: "auto",
        backgroundColor: "black",
        padding: "20px",
        top: "75px",
        left: "20%",
        zIndex: "10",
        color: '#FCC42C',
        borderRadius: '20px'
    }, 
})


function WhatsNext(){
    const classes = getStyles()


    return(
        <div className={classes.root}>
            <h3>This is what we have planned for the future...</h3>
            <ul>
                <li>blah</li>
                <li>blah</li>
                <li>blah</li>
            </ul>
            <h4>This was created by...</h4>
            <ul>
                <li>blah</li>
                <li>blah</li>
                <li>blah</li>
            </ul>
            <h5>
                Thanks for checking us out! Feel free to contribute via this donation to keep the site running... and if you want to contribute to the code let us know! 
            </h5>
           
        </div>
    )


}

export default WhatsNext