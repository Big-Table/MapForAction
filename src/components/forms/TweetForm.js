import React from "react";
import "./actionForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { postTweets } from "../../requests/requests";

class TweetForm extends React.Component {

  state = {
    url: '',
    _incident: "",
    errors: {}
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
    event.preventDefault()
    let valid = this.handleValidation()
    if(valid){
      postTweets(this.state)
      this.setState({
          url: "",
          _incident: ""
      })
      this.props.tweetButton()
    }
  }

  handleValidation = () => {
    let errors = {}
    let isFormValid = true

    if(!this.state.url){
      isFormValid = false 
      errors.url = "URL cannot be empty!"
    } else if((typeof(this.state.url) !== undefined)){
        if(!this.validURL(this.state.url)){
            isFormValid = false 
            errors.url = "Please Enter a valid Twitter URL"
        }
    }

    this.setState({
      errors: errors
    })
    return isFormValid
  }

  validURL = (url) => {
    let re = /https?:\/\/twitter\.com/

    for(let i=0; i < url.length; i++){
      if(url[i] === 'm' && url[i - 1] === 'o' && url[i - 2] === 'c'){
        let testString = url.slice(0, i + 1)
        if(re.test(testString)) return true
      }
    }
    return false
  }

  render() {
    return (
      <div id="actionForm" style={{backgroundColor: '#FCC42C', color: 'black'}}>
        <h2 style={{color: 'black'}}>Add a Tweet!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url" >
              Url<span className="required">*</span>
          </label>
          <span style={{
              color: 'red',
              fontWeight: 'bold',
              fontFamily: "Work Sans, sansSerif"
              }}
          >
          {this.state.errors.url}
          </span>
          <input
            name="url"
            type="text"
            placeholder="Add a link to Twitter!"
            value={this.state.url}
            onChange={this.handleChange}
          />

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
          <br></br>
          <input style={{border: 'solid', borderColor: 'black'}} type="submit" value="Submit" id="submitButton" />
        </form>
        <br></br>
      
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
