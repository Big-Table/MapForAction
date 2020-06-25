import React from "react";
import "./IncidentForm.css";
import { postIncidents, patchIncident } from "../requests/requests";
import CloseIcon from "@material-ui/icons/Close";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
// const incidentFormInitialState = {
//   title: "",
//   description: "",
//   lat: "",
//   lng: "",
//   organization: "",
//   petition: "",
//   image_url: "",
// };

class IncidentForm extends React.Component {
 
  state = {
    id: "",
    title: "",
    description: "",
    date: "",
    location: "",
    organization: "",
    petition: "",
    image_url: "",
  }

  componentDidMount(){
      console.log(this.props.incident[0])
      this.setState({
                id: this.props.incident[0]._id,
                title: this.props.incident[0].title, 
                description: this.props.incident[0].description,
                date: this.props.incident[0].date,
                location: this.props.incident[0].lat,
                organization: this.props.incident[0].organization, 
                petition: this.props.incident[0].petition, 
                image_url: this.props.incident[0].image_url, 
      })
  }

    handleChange(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(e){
      e.preventDefault()
      await patchIncident(
          {
          title: this.state.title, 
          description: this.state.description,
          date: this.state.date, 
          organization: this.state.organization,
          petition: this.state.petition, 
          image_url: this.state.image_url
          }, 
          this.state.id)
     
  }

//   async handleSubmit(e) {
//     e.preventDefault();
//     console.log("Hello World");
//     console.log(this.state)
//     await postIncidents(this.state);
//     // this.setState(incidentFormInitialState);
//     this.props.updateIncidents();
//     this.props.onClick()
//     alert("This incidence has been reported, thank you for being proactive");
//   }

//   handleAddress(address) {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(({ lat, lng }) =>
//         this.setState({ lat, lng })
//       );
//   }


  render() {
    console.log(this.state)
    return (
      <div id="incidentForm">
        <h2>Report an Incident</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
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
            onChange={(event) => this.handleChange(event)}
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
            onChange={(event) => this.handleChange(event)}
          />

          <label htmlFor="date">
            Date<span className="required">*</span>
          </label>
          <input
            id="dateInput"
            name="date"
            type="text"
            rows="5"
            placeholder="Date"
            aria-describedby="required-date"
            value={this.state.date}
            onChange={(event) => this.handleChange(event)}
          />

          <label>
              Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            rows="5"
            placeholder="Location"
            aria-describedby="required-location"
            value={this.state.location}
            onChange={(event) => this.handleChange(event)}
          />
          

          {/* <label htmlFor="lat">
            Location<span className="required">*</span>
          </label>

          <GooglePlacesAutocomplete
            onSelect={(description) => this.handleAddress(description.description)}
            placeholder="Address or nearby location"
          /> */}

          <label htmlFor="organization">Organization</label>
          <input
            name="organization"
            type="text"
            placeholder="Add a link to related organization"
            value={this.state.organization}
            onChange={(event) => this.handleChange(event)}
          />

          <label htmlFor="petition">Petition</label>
          <input
            name="petition"
            type="text"
            placeholder="Add a link to related petition"
            value={this.state.petition}
            onChange={(event) => this.handleChange(event)}
          />

          <label htmlFor="image_url">Image</label>
          <input
            name="image_url"
            type="text"
            placeholder="Paste an Image URL"
            value={this.state.image_url}
            onChange={(event) => this.handleChange(event)}
          />


         

          <input type="submit" value="Submit" id="submitButton" />
       
        </form>
        <CloseIcon
          id="close-button"
          onClick={this.props.edit}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default IncidentForm;
