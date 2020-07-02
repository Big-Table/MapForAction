import React from "react";
import "./actionForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { postActions } from "../../requests/requests";

class ActionForm extends React.Component {

  state = {
    title: "",
    action_type: "",
    url: "",
    _incident: ""
  }

  componentDidMount(){
    this.setState({
      _incident: this.props.incident._id
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    console.log('u pressed submit'
    )
    event.preventDefault()
    postActions(this.state)
    this.setState({
        title: "",
        action_type: "",
        url: "",
        _incident: ""
    })
    this.props.handleClick()
    this.props.refresh()
  }
  // async handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("Hello World");
  //   await postIncidents(this.state);
  //   this.setState(incidentFormInitialState);
  //   this.props.updateIncidents();
  //   this.props.onClick()
  //   alert("This incidence has been reported, thank you for being proactive");
  // }

//   handleAddress(address) {
//     geocodeByAddress(address)
//       .then(results => getLatLng(results[0]))
//       .then(({ lat, lng }) =>
//         this.setState({ lat, lng })
//       );
//   }

  render() {
    console.log(this.props)
    console.log(this.state)

    return (
      <div id="actionForm" style={{color: 'black'}}>
        <h2 style={{color: 'black'}}>Add a Specific Action to Take!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title<span className="required">*</span>
          </label>
          <input
            name="title"
            type="text"
            maxLength="90"
            placeholder="Action Title"
            aria-describedby="required-description"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label htmlFor="action_type" >
              Action Type<span className="required">*</span>
          </label>
          <br></br>
          <select 
            name='action_type'
            type='select'
            placeholder='Choose an Action Type'
            aria-describedby="required-description"
            value={this.state.action_type}
            onChange={this.handleChange}
          >
              <option value='Donate'>Donate</option>
              <option value='Vote'>Vote</option>
              <option value='Sign A Petition'>Sign A Petition</option>
              <option value='Join a Cause'>Join a Cause</option>
              <option value='Attend a protest'>Attend A Protest</option>
          </select>

          <br></br>
          <label htmlFor="url" >
              Url<span className="required">*</span>
          </label>
          <input
            name="url"
            type="text"
            placeholder="Add a link to your action!"
            value={this.state.url}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" id="submitButton" />
          <label hidden>
            Incident ID
          </label>
          <input
           hidden
           name='incidentID'
           type="text"
           value={this.state.incidentID}
          >
          </input>
        </form>
        <CloseIcon
          id="close-button"
          // onClick={this.props.handleRefresh}
          onClick={this.props.handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default ActionForm;
