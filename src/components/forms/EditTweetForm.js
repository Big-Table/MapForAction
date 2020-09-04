import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { patchTweet } from "../../requests/requests";
import "./IncidentForm.css";

class IncidentForm extends React.Component {
  state = {
    id: "",
    url: "",
  };

  componentDidMount() {
    // console.log(this.props.tweet[0]);
    this.setState({
      id: this.props.tweet[0]._id,
      url: this.props.tweet[0].url,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await patchTweet({ url: this.state.url }, this.state.id).then(() => {
      this.props.update();
      alert("you updated this tweet");
    });
  }

  render() {
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
