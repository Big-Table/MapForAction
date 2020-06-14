import React, { useEffect } from 'react'


const TwitterExperimental = props => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return(
        <section className="twitterContainer">
            <div className="twitter-embed">
                <div dangerouslySetInnerHTML={{ __html: "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">Dash-cam footage Athabasca Chipewyan First Nation Chief Allan Adam getting brutally attacked by Wood Buffalo RCMP officers at Fort McMurray, then punched in the head and put in a choke-hold. <a href=\"https://twitter.com/hashtag/acab?src=hash&amp;ref_src=twsrc%5Etfw\">#acab</a> <a href=\"https://twitter.com/hashtag/cdnpoli?src=hash&amp;ref_src=twsrc%5Etfw\">#cdnpoli</a> <a href=\"https://twitter.com/hashtag/policebrutality?src=hash&amp;ref_src=twsrc%5Etfw\">#policebrutality</a><a href=\"https://t.co/Hj8QVc2kbS\">pic.twitter.com/Hj8QVc2kbS</a></p>&mdash; Anonymous (@YourAnonCentral) <a href=\"https://twitter.com/YourAnonCentral/status/1271321050408607745?ref_src=twsrc%5Etfw\">June 12, 2020</a></blockquote>\n<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n" }}>

                </div>
            </div>
        </section>
       
    )
}

export default TwitterExperimental