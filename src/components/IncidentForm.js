import React from "react";
import "./IncidentForm.css";
import { makeStyles } from '@material-ui/core'
import { postIncidents} from '../requests/requests'
class IncidentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      lat: "", 
      lng: "", 
      organization: "",
      petition: "",
      image_url: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //bind addToDatabase function
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //FUNCTION addToDatabase => to send created incident to the database

  handleSubmit(e) {
    e.preventDefault();
    console.log("Hello World");
    postIncidents(this.state)
    this.setState({
      title: "",
      description: "",
      lat: "", 
      lng: "", 
      organization: "",
      petition: "",
      image_url: "",
    })
    //invoke a function that will send created incident to the database
    //clean state
    //alert("This incidence has been reported, thank you for being proactive");
  }

  render() {
    return (
      <>
        <h2>Report an Incident</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title<span className="required">*</span>
          </label>
          <input
            name="title"
            type="text"
            title="Write the incident title"
            aria-describedby="required-description"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label htmlFor="description">
            Explain what you saw<span className="required">*</span>
          </label>
          <input
            name="description"
            type="text"
            title="The more details, the better!"
            aria-describedby="required-description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label htmlFor="lat">
            Latitude<span className="required">*</span>
          </label>
          <input
            hidden 
            name="lat"
            type="text"
            title="Enter street address or intersections"
            aria-describedby="required-description"
            value={this.state.lat}
            onChange={this.handleChange}
          />

          <label htmlFor="lng">
            Longitude<span className="required">*</span>
          </label>
          <input
            hidden
            name="lng"
            type="text"
            title="Enter street address or intersections"
            aria-describedby="required-description"
            value={this.state.lng}
            onChange={this.handleChange}
          />

          <label htmlFor="organization">Organization</label>
          <input
            name="organization"
            type="text"
            title="Add a link to related organization"
            value={this.state.organization}
            onChange={this.handleChange}
          />

          <label htmlFor="petition">Petition</label>
          <input
            name="petition"
            type="text"
            title="Add a link to related petition"
            value={this.state.petition}
            onChange={this.handleChange}
          />

          <label htmlFor="image_url">Upload Photos</label>
          <input
            name="image_url"
            type="file"
            id="imageUpload"
            value={this.state.image_url}
            onChange={this.handleChange}
            accept=".png, .jpg, .jpeg"
          />

          <input type="submit" value="Submit" />
          <p aria-hidden="true" id="required-description">
            <span className="required">*</span>Required field
          </p>
        </form>
      </>
    );
  }
}

export default IncidentForm;
