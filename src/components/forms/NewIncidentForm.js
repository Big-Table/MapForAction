import { Checkbox, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import TextareaAutosize from "react-textarea-autosize";
import { postIncidents } from "../../requests/requests";
import DatePicker from "./DatePicker";
const getStyles = makeStyles({
  root: {
    position: "absolute",
    textAlign: "left",
    /* margin: 2px; */
    width: "40%",
    height: "80%",
    backgroundColor: "#FCC42C",
    padding: "40px",
    top: "7%",
    left: "26%",
    zIndex: "10",
    overflowY: "scroll",
    border: "solid",
    borderColor: "black",
    borderWidth: "5px",
    borderRadius: "10px",
  },
  input: {
    width: "30%",
  },
  center: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  fakeForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "solid",
    /* font-size: 1.5em; */
    width: "100%",
  },
  formLabel: {
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    width: "92%",
    height: "40px",
    fontSize: "20px",
    fontFamily: "Work Sans, sansSerif",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "30px",
  },
  submitButton: {
    backgroundColor: "#000000",
    color: "#FCC42C",
    borderStyle: "solid",
    borderColor: "#FCC42C",
    borderWidth: 1,
    height: 40,
    width: 150,
    borderRadius: 20,
    fontFamily: "Work Sans, sansSerif",
    fontWeight: 700,
    cursor: "pointer",
    outline: "none",
    display: "flex",
    justifyContent: "center",
  },
  errorMessages: {
    color: "red",
    fontWeight: "bold",
    fontFamily: "Work Sans, sansSerif",
  },
});
function IncidentForm2(props) {
  const classes = getStyles();

  const [incidentForm, setIncidentForm] = useState({
    title: "",
    description: "",
    date: "",
    lat: "",
    lng: "",
    organization: "",
    petition: "",
    image_url: "",
    profilePicture: "",
    firstName: "",
    checked: false,
  });

  useEffect(() => {
    if (props.currentUser) {
      setIncidentForm({
        ...incidentForm,
        profilePicture: props.currentUser.profilePicture,
        firstName: props.currentUser.firstName,
      });
    }
  }, [props.currentUser]);

  const handleChange = (event) => {
    setIncidentForm({
      ...incidentForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleDate = (date) => {
    setIncidentForm({
      ...incidentForm,
      date: date,
    });
  };

  useEffect(() => {
    if (incidentForm.checked === true) {
      setIncidentForm({
        ...incidentForm,
        firstName: "",
        profilePicture: "",
      });
    }
    if (incidentForm.checked === false) {
      setIncidentForm({
        ...incidentForm,
        firstName: props.currentUser.firstName,
        profilePicture: props.currentUser.profilePicture,
      });
    }
  }, [incidentForm.checked]);

  const handleAddress = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => setIncidentForm({ ...incidentForm, lat, lng }));
  };

  const handleCheckBox = (event) => {
    setIncidentForm({
      ...incidentForm,
      checked: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = handleValidation();
    if (valid) {
      postIncidents(incidentForm).then((resp) => {
        props.lastIncident(resp.data._id);
      });
      setIncidentForm({
        title: "",
        description: "",
        date: "",
        lat: "",
        lng: "",
        organization: "",
        petition: "",
        image_url: "",
        profilePicture: "",
        firstName: "",
        checked: false,
      });
      props.updateIncidents();
      props.showForm();
      props.submitted();
    }
  };

  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let isFormValid = true;

    if (!incidentForm.title) {
      isFormValid = false;
      errors.title = "Title cannot be empty!";
    } else if (typeof incidentForm.title !== undefined) {
      if (!incidentForm.title.match(/^[a-zA-Z ]+$/)) {
        isFormValid = false;
        errors.title = "Title can only include letters!";
      } else if (incidentForm.title.length > 50) {
        isFormValid = false;
        errors.title = "Title must be less than 50 characters long!";
      }
    }

    if (!incidentForm.description) {
      isFormValid = false;
      errors.description = "Description cannot be empty!";
    } else if (typeof incidentForm.description !== undefined) {
      if (incidentForm.description.length < 50) {
        isFormValid = false;
        errors.description = "Description must be longer than 50 characters!";
      }
    }

    if (!incidentForm.date) {
      isFormValid = false;
      errors.date = "Please Choose a Date!";
    }

    if (!incidentForm.lat) {
      isFormValid = false;
      errors.location = "Please Choose a Location!";
    }

    if (incidentForm.organization) {
      if (!validURL(incidentForm.organization)) {
        isFormValid = false;
        errors.organization = "Please enter a valid URL";
      }
    }

    if (incidentForm.petition) {
      if (!validURL(incidentForm.petition)) {
        isFormValid = false;
        errors.petition = "Please enter a valid URL";
      }
    }

    setErrors(errors);
    return isFormValid;
  };

  const validURL = (str) => {
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

  return (
    <div className={classes.root}>
      <h2>Report an Incident</h2>
      <div className={classes.fakeForm}>
        <label className={classes.formLabel} htmlFor="title">
          Title<span className="required">*</span>
        </label>
        <br></br>
        <span className={classes.errorMessages}>{errors.title}</span>

        <input
          className={classes.input}
          name="title"
          type="text"
          maxLength="90"
          placeholder="Write the Incident Title."
          aria-describedby="required-description"
          value={incidentForm.title}
          onChange={handleChange}
        />
        <br></br>

        <label className={classes.formLabel} htmlFor="description">
          Description<span className="required">*</span>
        </label>

        <br></br>
        <span className={classes.errorMessages}>{errors.description}</span>

        <TextareaAutosize
          name="description"
          className={classes.input}
          minRows={5}
          maxRows={9}
          placeholder="Who, What, Where, When, Why!
                     Give Us the Details."
          value={incidentForm.description}
          onChange={(event) => handleChange(event)}
        />

        <br></br>
        <label
          style={{ display: "flex", justifyContent: "center" }}
          className={classes.formLabel}
          htmlFor="date"
        >
          Date<span className="required">*</span>
        </label>

        <br></br>
        <span className={classes.errorMessages}>{errors.date}</span>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <DatePicker
            handleDate={handleDate}
            incidentForm={incidentForm}
            className={classes.input}
          ></DatePicker>
        </div>

        <br></br>

        <label className={classes.formLabel} htmlFor="lat">
          Location<span className="required">*</span>
        </label>

        <br></br>

        <span className={classes.errorMessages}>{errors.location}</span>

        <GooglePlacesAutocomplete
          inputClassName={classes.input}
          onSelect={(description) => handleAddress(description.description)}
          placeholder="Address or nearby location."
        />

        <br></br>

        <label className={classes.formLabel} htmlFor="organization">
          Organization
        </label>

        <br></br>

        <span className={classes.errorMessages}>{errors.organization}</span>

        <input
          className={classes.input}
          name="organization"
          type="text"
          placeholder="Add a link to related organization."
          value={incidentForm.organization}
          onChange={handleChange}
        />

        <br></br>

        <label className={classes.formLabel} htmlFor="petition">
          Petition
        </label>

        <br></br>

        <span className={classes.errorMessages}>{errors.petition}</span>

        <input
          className={classes.input}
          name="petition"
          type="text"
          placeholder="Add a link to related petition."
          value={incidentForm.petition}
          onChange={handleChange}
        />

        <br></br>
        <br></br>

        <label
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "30px",
          }}
          htmlFor="checkbox"
        >
          <Checkbox
            type="checkbox"
            checked={incidentForm.checked}
            onChange={handleCheckBox}
            style={{ color: "black" }}
          />
          Submit Anonymously
        </label>

        <br></br>
        <br></br>

        <input
          type="submit"
          value="Submit"
          id="submitButton"
          style={{ borderStyle: "solid", borderColor: "black" }}
          onClick={handleSubmit}
        />

        <CloseIcon
          className={classes.closeButton}
          onClick={props.showForm}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default IncidentForm2;
