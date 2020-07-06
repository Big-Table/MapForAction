import { makeStyles } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from 'react';
import "./IncidentForm.css";
import DropZone2 from "./DropZone2"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {upload} from '../../requests/requests'

const getStyles = makeStyles({
    root: {
        position: 'absolute',
        textAlign: 'center',
        width: '45%',
        height: 'auto',
        backgroundColor: '#FCC42C',
        padding: '20px',
        top: '60px',
        left: '25%',
        zIndex: 10,
        border: 'solid', 
        borderColor: 'black',
        borderWidth: '5px',
        borderRadius: '10px'
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
        backgroundColor: "#FCC42C",
        color: "#000000",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontFamily: 'Work Sans',
        fontWeight: 700,
        cursor: "pointer",
        outline: "none",
        display: 'flex', 
        justifyContent: 'center',
        paddingTop: 2
    },
    alert: {
        backgroundColor: 'black', 
        color: '#FCC42C'
    }, 
    backButton: {
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
        outline: "none"
    }
})
function ImageForm(props){
    const classes = getStyles()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
        props.submitted()
      };
    
    const handleImageUpload = (file) => {
        console.log(file)
        let formData = new FormData()
        formData.append("upload", file)
        formData.append("id", props.lastIncidentID)
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
          }
          upload(formData)
        // fetch('http://localhost:5000/incidents/upload', {
        //     method: "POST",
        //     // headers: {
        //     //   'Content-Type': 'application/json'
        //     // },
        //     body: formData
        // })
          
    }

    // const handleImageDrop = (e) => {
    //     // console.log(e)
    //     console.log(e)
    //     console.log(e.target)
    //     console.log(e.target.value)
    //     console.log(e.target.files)
    
    
    //     let formData = new FormData()
    //     formData.append("upload", e.target.files[0])
    //     formData.append("id", props.lastIncidentID)
        
    //     for (var key of formData.entries()) {
    //       console.log(key[0] + ', ' + key[1]);
    //     }
    //     console.log(formData)
    //     fetch('http://localhost:5000/incidents/upload', {
    //       method: "POST",
    //       // headers: {
    //       //   'Content-Type': 'application/json'
    //       // },
    //       body: formData
    //     })
        
    //     // props.submitted()
    //   }

    //   const [submitted, setSubmitted] = useState(false)

      

    return (
        <div className={classes.root} >
           
            <h2>Your Incident has been reported! </h2>
            <h3>Please upload an image for your incident</h3>
            <DropZone2 handleImageUpload={handleImageUpload}></DropZone2>
            
            {/* <FileDrop></FileDrop> */}
            <div className={classes.center}>
            <form  className={classes.center}>
                {/* <label htmlFor="image">Upload Photo</label>
                <input
                    style={{paddingLeft: '320px'}}
                    name="image"
                    type="file"
                    id="imageUpload"
                    // value={this.state.image_url}
                    onChange={handleImageChange}
                    accept=".png, .jpg, .jpeg"
                
                /> */}
                <br></br>
                <br></br>
            
                <button className={classes.button} onClick={(e) => handleClickOpen(e)}>
                    Finished!
                </button>
            </form>
            
                    <Dialog
                    style={{paddingBottom: '20px'}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle className={classes.alert} id="alert-dialog-title">{"Your incident has been reported!"}</DialogTitle>
                    <DialogContent  className={classes.alert}>
                    <DialogContentText id="alert-dialog-description" className={classes.alert}>
                        Thank you for your contribution, we appreciate it. You are helping to develop this application and promote postive change.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{display: 'flex', justifyContent: 'center'}}className={classes.alert}>
                    <button className={classes.backButton} onClick={handleClose} color="primary" autoFocus>
                        Close
                    </button>
                    {/* <button onClick={handleClose} color="primary" autoFocus>
                        Sign In
                    </button> */}
                    </DialogActions>
                    </Dialog>
                
           
            </div>
            <CloseIcon
                id="close-button"
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
            />
           <br></br>
        </div>
    )
}

export default ImageForm