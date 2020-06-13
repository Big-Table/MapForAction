import TweetEmbed from 'react-tweet-embed'


const Tweet = props => {


    return(
        <TweetEmbed id={props.tweet_url.split("/")[5]} />
    )
}


export default Tweet