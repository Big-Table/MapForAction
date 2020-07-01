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
        
        props.submitted()
        alert("Thank you for effort! Your incident is pending review!")
      }


    return (
        <div className={classes.root} >
           
            <h2>Your Incident has been reported! </h2>
            <h3>Please upload an image for your incident</h3>
            <div className={classes.center}>
            <form  style={{paddingLeft: '110px'}}>
                <label htmlFor="image">Upload Photo</label>
                <input
                    name="image"
                    type="file"
                    id="imageUpload"
                    // value={this.state.image_url}
                    onChange={handleImageChange}
                    accept=".png, .jpg, .jpeg"
                />
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