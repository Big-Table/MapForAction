import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import IncidentTable from './IncidentTable'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TweetTable from './TweetTable'
import ActionTable from './ActionTable'


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        textAlign: 'left',
        /* margin: 2px; */
        width: '100%',
        height: '100%',
        backgroundColor: '#fcc42c',
        // padding: '20px',
        left: '0%',
        zIndex: 10
        /* max-width: 50vh; */
        /* top: 25%;
        bottom: 25% */
    }, 
    closeButton: {
      
        color: 'black',
       backgroundColor: 'black'
    }, 
    span: {
        fontSize: '20px', 
        textAlign: 'center'
    }, 
    inline: {
        display: 'flex',
        justifyContent: 'center',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}))

function IncidentQueueGrid(props){

const classes = useStyles()

//updating whats been edited on the incident upon submit
const [update, setUpdate] = useState(false)

const handleUpdate = () => {
    setUpdate(!update)
}

//updating whats been edited on the tweet upon submit
const [updateTweets, setUpdateTweets] = useState(false)

const handleUpdateTweets = () => {
    setUpdateTweets(!updateTweets)
}

//updating whats been edited on the action upon submit
const [updateActions, setUpdateActions] = useState(false)

const handleUpdateActions = () => {
    setUpdateActions(!updateActions)
}

//setting the type shown; incidents, tweets, or actions
const [type, setType] = React.useState('');

const handleChange = (event) => {
  setType(event.target.value);
};

console.log(type)

    return(
        <div className={classes.root}>
            {type === 'incidents' &&  <IncidentTable update={handleUpdate} ></IncidentTable>}
           
            {type === 'actions' && <ActionTable update={handleUpdateActions}></ActionTable>}

            {type === 'tweets' && <TweetTable update={handleUpdateTweets}></TweetTable>}

            <div>
             <div className={classes.inline}>
                <button className={classes.closeButton}><Link to='/'>Back to Main Page</Link>
                </button>
                <FormControl className={classes.formControl}>
                    <InputLabel id="selectionType">Type to Approve</InputLabel>
                    <Select
                    labelId="selectionType"
                    id="selectionType"
                    value={type}
                    onChange={handleChange}
                    >
                    <MenuItem value={"incidents"}>Incidents</MenuItem>
                    <MenuItem value={"tweets"}>Tweets</MenuItem>
                    <MenuItem value={"actions"}>Actions</MenuItem>
                    </Select>
                </FormControl>
             </div>
            </div>

        </div>
    )
}

export default IncidentQueueGrid