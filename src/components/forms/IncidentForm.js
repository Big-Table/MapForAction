import React from "react";
import "./IncidentForm.css";
import { postIncidents } from "../../requests/requests";
import CloseIcon from "@material-ui/icons/Close";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import Grid from '@material-ui/core/Grid'

const incidentFormInitialState = {
  title: "",
  description: "",
  lat: "",
  lng: "",
  organization: "",
  petition: "",
  image_url: "",
  profilePicture: "", 
  firstName: ""
};

class IncidentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = incidentFormInitialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      profilePicture: this.props.currentUser.profilePicture,
      firstName: this.props.currentUser.firstName
    })
  }

  

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log("Hello World");
    console.log(this.state)
    await postIncidents(this.state)
    .then(resp => {
      console.log(resp)
      this.props.lastIncident(resp.data._id)
    })
    this.setState(incidentFormInitialState);
    this.props.updateIncidents();
    this.props.showForm()
    this.props.submitted()
    // alert("This incidence has been reported, thank you for being proactive!");
  }

  // handleImageChange(e){
  //   // console.log(e)
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)
  //   console.log(e.target.files)

  //   console.log(this.props.lastIncidentID)
  //   let formData = new FormData()
  //   formData.append("upload", e.target.files[0])
  //   formData.append("id", this.props.lastIncidentID)
    
  //   for (var key of formData.entries()) {
  //     console.log(key[0] + ', ' + key[1]);
  //   }
  //   console.log(formData)
  //   fetch('http://localhost:5000/incidents/upload', {
  //     method: "POST",
  //     // headers: {
  //     //   'Content-Type': 'application/json'
  //     // },
  //     body: formData
  //   })
  // }

  handleAddress(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        this.setState({ lat, lng })
      );
  }

  render() {
    console.log(this.state)

    return (
      <div id="incidentForm">
        <h2>Report an Incident</h2>
        <form onSubmit={this.handleSubmit} id="form">
          <Grid container spacing={2}>
            <Grid item md={6}>
              <label htmlFor="title">
                Title<span className="required">*</span>
              </label>
              
              <input
                name="title"
                type="text"
                maxlength="90"
                placeholder="Write the incident title"
                aria-describedby="required-description"
                value={this.state.title}
                onChange={this.handleChange}
              />

              <label htmlFor="description">
                Explain what you saw<span className="required">*</span>
              </label>
              <textarea
                id="descriptionInput"
                name="description"
                type="text"
                rows="5"
                placeholder="The more details, the better!"
                aria-describedby="required-description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            
              <label htmlFor="date">
                Date<span className="required">*</span>
              </label>
              <input
                id="dateInput"
                name="date"
                type="date"
                rows="5"
                placeholder="Date"
                aria-describedby="required-date"
                value={this.state.date}
                onChange={this.handleChange}
                /> 
              </Grid>
              {/* <Grid item md={1}>

              </Grid> */}

            <Grid item md={6}>
              <label htmlFor="lat">
                Location<span className="required">*</span>
              </label>

            <GooglePlacesAutocomplete
              onSelect={(description) => this.handleAddress(description.description)}
              placeholder="Address or nearby location"
            />

              <label htmlFor="organization">Organization</label>
              <input
                name="organization"
                type="text"
                placeholder="Add a link to related organization"
                value={this.state.organization}
                onChange={this.handleChange}
              />

              <label htmlFor="petition">Petition</label>
              <input
                name="petition"
                type="text"
                placeholder="Add a link to related petition"
                value={this.state.petition}
                onChange={this.handleChange}
              />

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
            </Grid>
          </Grid>

            <input type="submit" value="Submit" id="submitButton" style={{borderStyle: "solid", borderColor: "black"}}/>

          {/* <p aria-hidden="true" id="required-description">
            <span className="required">*</span>Required field
          </p> */}
        </form>
        <CloseIcon
          id="close-button"
          onClick={this.props.showForm}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default IncidentForm;
