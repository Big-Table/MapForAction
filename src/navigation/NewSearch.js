import React, { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, withTheme } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 60,
    left: ".70%",
    width: "22%",
    zIndex: 3,
    color: "#FCC42C",
    backgroundColor: "#000000",
  },
  test: {},
  tooltip: {
    backgroundColor: "black",
    color: "#FCC42C",
    fontSize: 13,
  },
  tooltip2: {
    backgroundColor: "#FCC42C",
    color: "green",
    fontSize: 13,
  },
});

function NewSearch(props) {
  const classes = useStyles();

  const [location, setLocation] = useState("");

  const handleLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const onZipCodeSearchClick = (newLocation) => {
    if (newLocation === "undefined") {
      geocodeByAddress(location)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => props.handleZipCode(lat, lng));
    } else {
      geocodeByAddress(newLocation)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => props.handleZipCode(lat, lng));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onZipCodeSearchClick();
    }
  };

  const handleLocationChange = (e) => {
    handleLocation(e.target.value);
  };

  return (
    <div className={classes.root}>
      {/* <TextField 
                onKeyDown={e => handleKeyDown(e)}
                onChange={e => handleLocationChange(e)}
                // onPaste={e => handleZipcodeInputPaste(e)}
                value={location}
                className={classes.root}
                style={{color: 'white'}}
                placeholder='Enter a Location'
                id="outlined-basic" 
                variant="outlined"
                InputProps={{
                    style: {color: '#FCC42C'},
                    endAdornment: (
                      <InputAdornment position="center">
                        <Tooltip 
                        classes={{
                            tooltip: classes.tooltip,
                            arrow: classes.arrow
                          }}
                        title='Search'>
                            <SearchIcon cursor='pointer' onClick={onZipCodeSearchClick }/>
                        </Tooltip>
                      </InputAdornment>
                     )
                }}
                /> */}
      <GooglePlacesAutocomplete
        inputStyle={{
          width: "100%",
          height: "40px",
          backgroundColor: "black",
          color: "#FCC42C",
          border: "solid",
          borderColor: "#FCC42C",
          fontSize: "20px",
          fontFamily: "Work Sans, sansSerif",
        }}
        onChange={(e) => handleLocationChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        inputClassName={classes.test}
        onSelect={(description) =>
          onZipCodeSearchClick(description.description)
        }
        placeholder="Search location..."
        //   autoFocus={false}
        debounce="500"
      />
      {/* {zip.length === 5 ? 
                <TextField 
                onKeyDown={e => handleKeyDown(e)}
                onChange={e => handleZipCodeChange(e)}
                onPaste={e => handleZipcodeInputPaste(e)}
                value={zip}
                className={classes.root}
                style={{color: 'white'}}
                placeholder='Enter Zip Code'
                id="outlined-basic" 
                variant="outlined"
                InputProps={{
                    style: {color: color},
                    endAdornment: (
                      <InputAdornment position="center">
                        <Tooltip 
                        classes={{
                            tooltip: classes.tooltip2,
                            arrow: classes.arrow
                          }}
                        title='Search'>
                            <SearchIcon cursor='pointer' onClick={zip.length === 5 &&onZipCodeSearchClick }/>
                        </Tooltip>
                      </InputAdornment>
                     )
                }}
                />
            :
                <TextField 
                onChange={e => handleZipCodeChange(e)}
                onPaste={e => handleZipcodeInputPaste(e)}
                value={zip}
                className={classes.root}
                style={{color: 'white'}}
                placeholder='Enter Zip Code'
                id="outlined-basic" 
                variant="outlined"
                InputProps={{
                    style: {color: color},
                    endAdornment: (
                    <InputAdornment position="center">
                        <Tooltip 
                        classes={{
                            tooltip: classes.tooltip,
                            arrow: classes.arrow
                        }}
                        title='Search'>
                            <SearchIcon cursor='pointer' onClick={zip.length === 5 &&onZipCodeSearchClick }/>
                        </Tooltip>
                    </InputAdornment>
                    )
                }}
                />
            } */}
    </div>
  );
}

export default NewSearch;
