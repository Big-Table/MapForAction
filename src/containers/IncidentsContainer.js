import React from 'react'
import Grid from '@material-ui/core/Grid'
import Incident from '../Incident'
import {makeStyles, Grow} from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        width: "40%",
    },
    gridItem: {
        flex: "grow",
    }
})

const IncidentsContainer = (props) =>  {
    // const [incident, setIncident] = useState()
    // useEffect(() => {
    //     return () => {
    //         setIncident(())
    //     }
    // }, [input])
    const classes = useStyles()
    const incidents = [{title:"bad", description:"things happened", location:"1232,1223"},{title:"worse", description:"things happened", location:"54,184"}]
    const renderIncidentsGrid = () => {
        return incidents.map((incident)=>{
            return(
                <Incident key={incident.location} {...incident}/>
            )
        })
    }
        return(                    
            
            <Grid container className={classes.container} spacing={1} >
                <Grid className={classes.gridItem} item>
                   {renderIncidentsGrid()}
                </Grid>
            </Grid> 
                
        )
    
}

export default IncidentsContainer;