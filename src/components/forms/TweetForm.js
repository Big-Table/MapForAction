import React from "react";
import "./actionForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { postTweets } from "../../requests/requests";

class TweetForm extends React.Component {

  state = {
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
    postTweets(this.state)
    this.setState({
        url: "",
        _incident: ""
    })
    this.props.tweetButton()

  }

  render() {
    console.log(this.props)
    console.log(this.state)

    return (
      <div id="actionForm" style={{color: 'black'}}>
        <h2 style={{color: 'black'}}>Add a Tweet!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url" >
              Url<span className="required">*</span>
          </label>
          <input
            name="url"
            type="text"
            placeholder="Add a link to Twitter!"
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
          onClick={this.props.tweetButton}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default TweetForm;
