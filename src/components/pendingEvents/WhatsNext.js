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
            <h3>About this app...</h3>

            <p>MapForAction was created to map out instances of police brutality and racial injustice while giving
            users the tools to help take action.
            </p>
            
            <ul>
                <li>The app attempts to clarify incidents of police violence which adversely effect Black people and 
                    People of Color.</li>
                <li>By bringing together information about these incidents and coupling that information with action items 
                    we can make this information actionable. 
                </li>
                <li>It uses a moderator system to make sure not just any information can be uploaded.</li>
                <li>Contributors can help by suggesting incidents, actions and tweets.</li>
            </ul>

            <p>
                We need you to help crowdsource this information in a way that makes it clear and concise.
                With ways to take action on what we see happening.
                </p>

            <p>MapForAction was created by a team of software engineers,
            one designer and one product manager for the NYC Coders: Hack for #BlackLivesMatter.</p>

            <h4>This is what we have planned for the future...</h4>
            <ul>
                <li>Give users the ability to request edits to incidents and actions.</li>
                <li>Expand our moderator system.</li>
            </ul>
            <h5>
                If you are a software engineer and would like to contribute please visit our Github.
                <br></br>
                Thanks for checking us out! Feel free to contribute via this donation to keep the site running... and if you want to contribute to the code let us know! 
                <br></br>Black Lives Matter, we remember and honor all victims depicted on this site. 
            </h5>
           
        </div>
    )


}

export default WhatsNext