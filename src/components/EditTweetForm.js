import React from "react";
import "./IncidentForm.css";
import { patchTweet } from "../requests/requests";
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
    url: "",

  }

  componentDidMount(){
      console.log(this.props.tweet[0])
      this.setState({
                id: this.props.tweet[0]._id,
                url: this.props.tweet[0].url, 
               
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
    await patchTweet(
      {url: this.state.url}, 
      this.state.id)
      .then(() => {
        this.props.update()
        alert("you updated this tweet")
      })
  }

//   async handleSubmit(e){
//       e.preventDefault()
//       await patchIncident(
//           {
//           title: this.state.title, 
//           description: this.state.description,
//           date: this.state.date, 
//           organization: this.state.organization,
//           petition: this.state.petition, 
//           image_url: this.state.image_url
//           }, 
//           this.state.id)
//           .then(() => {
//             this.props.update()
//             alert("you updated this incident")
//           })

     
//   }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div id="incidentForm">
        <h2>Modify a Tweet</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="url">
            URL<span className="required">*</span>
          </label>
          <input
            name="url"
            type="text"
            maxlength="90"
            aria-describedby="required-description"
            value={this.state.url}
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