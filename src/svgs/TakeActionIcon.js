import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
    
    },
    st0: {
        fill: "#FCC42C"
    }
});

export default function NoteIcon(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 19.4 23.6"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g id="noun_Protest_67892" transform="translate(-18.427 -5)">
                    <path id="Path_2" className={classes.st0} d="M31.8,17.9l-4.9-2.3l3.2,4.8l-0.7,7l-0.4,0l-0.4-7.1L25,14.9l-3-1.5l1.6-1.9l1.5,1.1l2.5-0.2
		l0.4-1.7l-5.8-2.5l-3.8,5.8l5.5,8.3l-1.6,6.4h9.3l0-5.8l1.9-2.1l0.3-1.9L31.8,17.9z"/>
                    <path id="Path_3" className={classes.st0} d="M36.4,11.1l-3.7,5l2,0.8l3.1-3.9L36.4,11.1z" />
                    <path id="Path_4" className={classes.st0} d="M33.7,8.3L29.5,15l2.1,0.8l4-5.7L33.7,8.3z" />
                    <path id="Path_5" className={classes.st0} d="M30.2,6.3l-1.9,3.2l1,0.4l-0.7,3.4L26,13.6l2.3,1l4.5-7.1L30.2,6.3z" />
                    <path id="Path_6" className={classes.st0} d="M29,5.9L26.4,5l-1.7,3L27.3,9l0.4-0.7L29,5.9z" />
                </g>
            </svg>
        </div>
    )
}