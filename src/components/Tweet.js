import React from 'react'
import TweetEmbed from 'react-tweet-embed'


const Tweet = props => {


    return(
        <TweetEmbed id={props.url.split("/")[5]} />
    )
}


export default Tweet