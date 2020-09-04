import React from "react";
import "./actionForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { postActions } from "../../requests/requests";

class ActionForm extends React.Component {
  state = {
    title: "",
    action_type: "",
    url: "",
    _incident: "",
    errors: {},
  };

  componentDidMount() {
    this.setState({
      _incident: this.props.incident._id,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = this.handleValidation();
    if (valid) {
      postActions(this.state);
      this.setState({
        title: "",
        action_type: "",
        url: "",
        _incident: "",
      });
      this.props.handleClick();
      this.props.refresh();
    }
  };

  handleValidation = () => {
    let errors = {};
    let isFormValid = true;

    if (!this.state.title) {
      isFormValid = false;
      errors.title = "Title cannot be empty!";
    } else if (typeof this.state.title !== undefined) {
      if (!this.state.title.match(/^[a-zA-Z ]+$/)) {
        isFormValid = false;
        errors.title = "Title can only include letters!";
      } else if (this.state.title.length > 50) {
        isFormValid = false;
        errors.title = "Title must be less than 50 characters long!";
      }
    }

    if (!this.state.action_type) {
      isFormValid = false;
      errors.action_type = "Action Type cannot be empty!";
    }

    if (!this.state.url) {
      isFormValid = false;
      errors.url = "URL cannot be empty!";
    } else if (typeof this.state.url !== undefined) {
      if (!this.validURL(this.state.url)) {
        isFormValid = false;
        errors.url = "Please enter a valid URL";
      }
    }

    this.setState({
      errors: errors,
    });
    return isFormValid;
  };

  validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  render() {
    return (
      <div
        id="actionForm"
        style={{ backgroundColor: "#FCC42C", color: "black" }}
      >
        <h2 style={{ color: "black" }}>Add a Specific Action to Take!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title<span className="required">*</span>
          </label>

          <span id="errors">{this.state.errors.title}</span>

          <input
            name="title"
            type="text"
            placeholder="Action Title"
            aria-describedby="required-description"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>

          <label htmlFor="action_type">
            Action Type<span className="required">*</span>
          </label>

          <span id="errors">{this.state.errors.action_type}</span>

          <select
            name="action_type"
            type="select"
            placeholder="Choose an Action Type"
            aria-describedby="required-description"
            value={this.state.action_type}
            onChange={this.handleChange}
          >
            <option value="Donate">Donate</option>
            <option value="Vote">Vote</option>
            <option value="Sign A Petition">Sign A Petition</option>
            <option value="Join a Cause">Join a Cause</option>
            <option value="Attend a protest">Attend A Protest</option>
          </select>

          <br></br>
          <label htmlFor="url">
            Url<span className="required">*</span>
          </label>

          <span id="errors">{this.state.errors.url}</span>

          <input
            name="url"
            type="text"
            placeholder="Add a link to your action!"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            style={{ border: "solid", borderColor: "black" }}
            type="submit"
            value="Submit"
            id="submitButton"
          />
          <label hidden>Incident ID</label>
          <input
            hidden
            name="incidentID"
            type="text"
            value={this.state.incidentID}
          ></input>
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
