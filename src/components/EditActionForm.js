import React from "react";
import "./IncidentForm.css";
import { patchAction } from "../requests/requests";
import CloseIcon from "@material-ui/icons/Close";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';


class EditActionForm extends React.Component {
 
  state = {
    id: "",
    title: "",
    action_type: "",
    url: "",

  }

  componentDidMount(){
      console.log(this.props.action[0])
      this.setState({
                id: this.props.action[0]._id,
                title: this.props.action[0].title,
                action_type: this.props.action[0].action_type,
                url: this.props.action[0].url,  
      })
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(e){
    e.preventDefault()
    await patchAction(
      { 
        title: this.state.title, 
        action_type: this.state.action_type,
        url: this.state.url
      }, 
      this.state.id)
      .then(() => {
        this.props.update()
        alert("you updated this action")
      })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div id="incidentForm">
        <h2>Modify an Action</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="title">
            Title<span className="required">*</span>
          </label>
          <input
            name="title"
            type="text"
            maxlength="90"
            aria-describedby="required-description"
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
          />
          <label htmlFor="action_type">
            Action Type<span className="required">*</span>
          </label>
          <input
            name="action_type"
            type="text"
            maxlength="90"
            aria-describedby="required-description"
            value={this.state.action_type}
            onChange={(event) => this.handleChange(event)}
          />
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

export default EditActionForm;
