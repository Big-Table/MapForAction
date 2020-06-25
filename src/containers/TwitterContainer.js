import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Tweet from '../components/Tweet'
import "./TwitterContainer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { getIncidentWithTweets, getApprovedTweets } from '../requests/requests'

const useStyles = makeStyles({
    root: {
        width: "95%",
        overflow: "scroll",
        borderTop: "1px solid #FFFFFF",
        marginTop: "3px",
        paddingTop: 3,
        fontFamily: "Work Sans",
        fontWeight: 700,
        color: "white",
        marginLeft: 7
    },
    tweet: {
        // borderBottom: "1px solid #898989",
    },
    logo: {
        color: "#00acee",
        position: "relative",
        top: 5
    },
    noTweets: {
        padding: 40
    }
})
const TwitterContainer = props => {
    const classes = useStyles(props)
    const [tweets, setTweets] = useState([])
 
    useEffect(() => {
        console.log(props.incident)
        getApprovedTweets(props.incident._id)
        .then(body => {
            console.log(body)
            let filter = body.filter(tweet => tweet._incident === props.incident._id)
            setTweets(filter)
            
        })
    }, [props.tweetButton])

    const renderTweets = () => {
            return tweets.map(tweet => {
                return <div className={classes.tweet}>
                    <Tweet url={tweet.url} />
                </div>
            })
        }
    
    console.log(tweets)
    return(
        <div className={classes.root}>
            <span className={classes.logo}><TwitterIcon /></span> Tweets
            {tweets.length > 0 ? renderTweets() : <div className={classes.noTweets}>There are no tweets for this incident.</div>}
        </div>
    )
}

export default TwitterContainer