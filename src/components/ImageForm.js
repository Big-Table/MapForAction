import React from 'react'
import "./IncidentForm.css";
import {makeStyles} from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";

const getStyles = makeStyles({
    root: {
        position: 'absolute',
        textAlign: 'center',
        width: '45%',
        height: 'auto',
        backgroundColor: '#FCC42C',
        padding: '20px',
        top: '200px',
        left: '25%',
        zIndex: 10
        /* max-width: 50vh; */
        /* top: 25%;
        bottom: 25% */
    }, 
    center: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    button: {
        backgroundColor: "#000000",
        color: "#FCC42C",
        borderStyle: "solid",
        borderColor: "#FCC42C",
        borderWidth: 1,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontFamily: 'Work Sans',
        fontWeight: 700,
        cursor: "pointer",
        outline: "none",
        display: 'flex', 
        justifyContent: 'center',
    }
})
function ImageForm(props){
    const classes = getStyles()

    const handleImageChange = (e) => {
        // console.log(e)
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        console.log(e.target.files)
    
    
        let formData = new FormData()
        formData.append("upload", e.target.files[0])
        formData.append("id", props.lastIncidentID)
        
        for (var key of formData.entries()) {
          console.log(key[0] + ', ' + key[1]);
        }
        console.log(formData)
        fetch('http://localhost:5000/incidents/upload', {
          method: "POST",
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          body: formData
        })
        
        // props.submitted()
      }


    return (
        <div className={classes.root} >
           
            <h2>Your Incident has been reported! </h2>
            <h3>Please upload an image for your incident</h3>
            <div className={classes.center}>
            <form  className={classes.center}>
                <label htmlFor="image">Upload Photo</label>
                <input
                    style={{paddingLeft: '320px'}}
                    name="image"
                    type="file"
                    id="imageUpload"
                    // value={this.state.image_url}
                    onChange={handleImageChange}
                    accept=".png, .jpg, .jpeg"
                
                />
                <br></br>
                <br></br>
                <button className={classes.button} onClick={() => props.submitted(true)}>Finished!</button>
            </form>
            </div>
            <CloseIcon
                id="close-button"
                onClick={props.submitted}
                style={{ cursor: "pointer" }}
            />
           <br></br>
        </div>
    )
}

export default ImageForm