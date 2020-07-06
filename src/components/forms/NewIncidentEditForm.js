import React, {useState, useEffect} from "react";
import { patchIncident } from "../../requests/requests";
import "./IncidentForm.css";
import {makeStyles} from '@material-ui/core' 
import TextareaAutosize from 'react-textarea-autosize';
import { postIncidents } from "../../requests/requests";
import CloseIcon from "@material-ui/icons/Close";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import Grid from '@material-ui/core/Grid'
import { Checkbox } from "@material-ui/core";
import DatePicker from './DatePicker'
import Moment from 'react-moment';

const getStyles = makeStyles({
    root: {
        position: "absolute",
        textAlign: "left",
        /* margin: 2px; */
        width: "40%",
        height: "80%",
        backgroundColor: "#FCC42C",
        padding: "40px",
        top: "7%",
        left: "26%",
        zIndex: "10",
        overflowY: 'scroll',
        border: 'solid', 
        borderColor: 'black',
        borderWidth: '5px',
        borderRadius: '10px'
    }, 
    input: {
        width: '30%'
    }, 
    center: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center"
    }, 
    fakeForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "solid",
        /* font-size: 1.5em; */
        width: "100%"
    }, 
    formLabel: {
        fontWeight: "bold",
        textAlign: "left",
      
    }, 
    input: {
        width: "92%",
        height: "40px",
        fontSize: "20px",
        fontFamily: "Work Sans, sansSerif"
        
    }, 
    closeButton: {
        position: "absolute",
        top: "20px",
        right: "30px"
    }, 
    submitButton: {
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
        display: "flex",
        justifyContent: "center"
    }
})
function NewEditIncidentForm(props){

    const classes = getStyles()
    const [form, setForm] = useState({
        id: "",
        title: "",
        description: "",
        date: "",
        location: "",
        organization: "",
        petition: "",
        image_url: "",
    })

    useEffect(() => {
        setForm({
            id: props.incident[0]._id,
            title: props.incident[0].title,
            description: props.incident[0].description,
            date: props.incident[0].date,
            location: `${props.incident[0].lat}, ${props.incident[0].lng}`,
            organization: props.incident[0].organization,
            petition: props.incident[0].petition,
            image_url: props.incident[0].image_url,
        })
    }, [])

    const handleChange = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        patchIncident({
            title: form.title,
            description: form.description, 
            date: form.date, 
            organization: form.organization, 
            petition: form.petition, 
            image_url: form.image_url
        }, 
        form.id
      ).then(() => {
          props.update()
          alert("This incident has been updated")
      })
    }

    
    return(
        <div className={classes.root}>
        <h2>Report an Incident</h2>
   {/* <form onSubmit={this.handleSubmit} id="form"> */}
   <div className={classes.fakeForm}>
     {/* <Grid container spacing={2}>
       <Grid item md={6}> */}
         <label className={classes.formLabel} htmlFor="title">
           Title<span className="required">*</span>
         </label>
       <br></br>
       <br></br>

         <input
           className={classes.input}
           name="title"
           type="text"
           maxLength="90"
           placeholder="Write the incident title"
           aria-describedby="required-description"
           value={form.title}
           onChange={handleChange}
         />

       <br></br>
       <br></br>

         <label className={classes.formLabel} htmlFor="description">
           Description<span className="required">*</span>
         </label>

       <br></br>
       <br></br>

         <TextareaAutosize
               name='description'
               className={classes.input}
               minRows={5}
               maxRows={9}
               placeholder="Who, What, Where, When, Why!
                Give us the details"
                value={form.description}
                onChange={(event) => handleChange(event)}
          />
         {/* <textarea
           id="descriptionInput"
           name="description"
           type="textArea"
           
           placeholder="The more details, the better!"
           aria-describedby="required-description"
           value={this.state.description}
           onChange={this.handleChange}
         /> */}
       <br></br>
       <br></br>
       <label style={{display: 'flex', justifyContent: 'center'}} className={classes.formLabel} htmlFor="date">
           Date<span className="required">*</span>
         </label>
       <br></br>
       <br></br>
       <div style={{display: 'flex', justifyContent: 'center'}}>
         
       <input
       className={classes.input}
       name='date'
       value={form.date}
       onChange={handleChange}
       >

       </input>
       {/* <DatePicker handleDate={handleDate} incidentForm={incidentForm} className={classes.input}></DatePicker> */}
       </div>
         {/* <input
           className={classes.input}
           id="dateInput"
           name="date"
           type="date"
           rows="5"
           placeholder="Date"
           aria-describedby="required-date"
           value={incidentForm.date}
           onChange={(event) => handleChange(event)}
           />  */}
         {/* </Grid> */}
         {/* <Grid item md={1}>

         </Grid> */}

       {/* <Grid item md={6}> */}
         <br></br>
         <br></br>
         <label  className={classes.formLabel} htmlFor="lat">
           Location<span className="required">*</span>
         </label>

       <br></br>
       <br></br>

       {/* <GooglePlacesAutocomplete
         inputClassName={classes.input}
         onSelect={(description) => handleAddress(description.description)}
         placeholder="Address or nearby location"
       /> */}

       <br></br>
       <br></br>

       <label className={classes.formLabel}   htmlFor="organization">Organization
       </label>

       <br></br>
       <br></br>

       <input
         className={classes.input}
         name="organization"
         type="text"
         placeholder="Add a link to related organization"
         value={form.organization}
         onChange={handleChange}
       />

       <br></br>
       <br></br>

       <label className={classes.formLabel} htmlFor="petition">
           Petition
       </label>

       <br></br>
       <br></br>

       <input
         className={classes.input}
         name="petition"
         type="text"
         placeholder="Add a link to related petition"
         value={form.petition}
         onChange={handleChange}
       />

       <br></br>
       <br></br>
       <br></br>
{/* 
       <label style={{display: 'flex', justifyContent: 'center', paddingRight: '30px'}}htmlFor="petition">
       <Checkbox
       type="checkbox"
       checked={incidentForm.checked}
       onChange={handleCheckBox}
       style={{ color: "black" }}
       />
       Submit Anonymously</label> */}

       {/* <label htmlFor="image_url">Image</label>
       <input
         name="image_url"
         type="text"
         placeholder="Paste an Image URL"
         value={this.state.image_url}
         onChange={this.handleChange}
       /> */}


       {/* <label htmlFor="image_url">Upload Photo</label>
       <input
         name="image_url"
         type="file"
         id="imageUpload"
         value={this.state.image_url}
         onChange={this.handleImageChange}
         accept=".png, .jpg, .jpeg"
       /> */}
       {/* </Grid>
     </Grid>
    */}
     <br></br>
     <br></br>
     <br></br>

     

     <input type="submit" value="Submit" id="submitButton" style={{borderStyle: "solid", borderColor: "black"}} onClick={handleSubmit}/>

     {/* <p aria-hidden="true" id="required-description">
       <span className="required">*</span>Required field
     </p> */}
   {/* </form> */}
   <CloseIcon
       //  id="closeButton"
     className={classes.closeButton}
     onClick={() => props.setEditForm(false)}
     style={{ cursor: "pointer" }}
   />

           {/* <div >
               <div className={classes.center}>
                   <label>
                       Title:
                   </label>
                   <input
                   className={classes.input}
                   name="title"
                   type="text"
                   maxLength="90"
                   placeholder="Write the incident title"
                   aria-describedby="required-description"
                   //   value={this.state.title}
                   //   onChange={this.handleChange}
                   >
                   </input>
               </div>
               <div className={classes.center}>
                   <label >
                       Description:
                   </label>
                   <TextareaAutosize
                       className={classes.input}
                       minRows={4}
                       maxRows={6}
                       defaultValue="The More Details the Better..."
                   />
               </div>
           </div>
       */}
       </div>
   </div>
    )
}

export default NewEditIncidentForm