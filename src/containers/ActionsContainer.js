import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TakeActionIcon from '../svgs/TakeActionIcon'
import { getIncidentWithTweets } from '../requests/requests'

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#000000",
        color: "white"
    },
    iconHolder: {
        height: 20,
        width: 20,
        display: "inline-block"
    },
    title: {
        display: "inline-block",
    },
    spacing: {
        lineHeight: 1.6
    }
})
const ActionsContainer = props => {
    const classes = useStyles(props)
    const [actions, setActions] = useState([])

    useEffect(() => {
        getIncidentWithTweets(props.incident.id)
            .then(body => setActions(body.actions))
    }, [])

    const renderSuggestedActions = () => {
        
            return actions.map(action => {
                return <a href={action.url}>{action.title}</a>
            })
        }
    

    return (
        <div className={classes.root}>
            <h1 >Actions:</h1>
            <div className={classes.iconHolder}><TakeActionIcon /></div>
            <h3 className={classes.title}>Suggested Actions: </h3>
            <br></br>

            <div className={classes.spacing}>
            {actions.length > 0 ? renderSuggestedActions() : <span>No actions have been suggested for this incident yet. </span>}
            <br></br>
             <a href="">Suggest an action.</a>
             </div>
            <br></br>
            <div className={classes.iconHolder}><TakeActionIcon /></div>
            <h3 className={classes.title}>Donate:</h3>
            <br></br>
            {props.incident.organization ? props.incident.organization : <a href={"https://secure.actblue.com/donate/ms_blm_homepage_2019"}>Black Lives Matter</a>}

{/* https://www.change.org/p/national-action-against-police-brutality-and-murder */}

            <br></br>
            <div className={classes.iconHolder}><TakeActionIcon /></div>
            <h3 className={classes.title}>Sign a Petition:</h3>
            
            <br></br>
            <div className={classes.spacing}>
                <a href={"https://www.change.org/p/national-action-against-police-brutality-and-murder"}>Justice for George Floyd</a>
                <br></br>
                <a href={"https://www.change.org/p/un-and-us-government-ban-the-use-of-rubber-bullets?recruiter=922712485&recruited_by_id=62d8f120-fdb6-11e8-8dbd-0dee42fd9442&utm_source=share_petition&utm_medium=copylink&utm_campaign=petition_dashboard"}>Ban the use of rubber bullets.</a>
                <br></br>
                <a href={"https://www.change.org/p/human-rights-campaign-justice-for-ahmuad-arbery?utm_content=cl_sharecopy_22016318_en-US%3Av4&recruiter=319353471&recruited_by_id=129af720-1490-11e5-9c6e-8515d331dad3&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"}>Justice for Ahmuad Arbery</a>
            </div>
        </div>
    )
}

export default ActionsContainer