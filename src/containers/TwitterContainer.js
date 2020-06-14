import React from 'react'
import { makeStyles } from '@material-ui/core'
import Tweet from '../components/Tweet'
import "./TwitterContainer.css";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    root: {
        width: "95%",
        overflow: "scroll",
        borderTop: "1px solid #FFFFFF",
        marginTop: "3px",
        fontFamily: "Work Sans",
        fontWeight: 700,
        color: "white"
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

    }
})
const TwitterContainer = props => {
    const classes = useStyles(props)

    const renderTweets = () => {
        if(props.tweets){
            return props.tweets.map(tweet => {
                return <div className={classes.tweet}>
                    <Tweet url={tweet.url} />
                </div>
            })
        }
    }    
    
    return(
        <div className={classes.root}>
            <span className={classes.logo}><TwitterIcon /></span> Tweets
            {props.tweets.length > 0 ? renderTweets() : <div className={classes.noTweets}>There are no tweets for this incident.</div>}
        
        </div>
    )
}

export default TwitterContainer