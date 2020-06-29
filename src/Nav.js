import React from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PopperMenu from "./PopperMenu";
import TextField from "@material-ui/core/TextField";
import logo from "./logo.png";
import zIndex from "@material-ui/core/styles/zIndex";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import _ from 'lodash';


const useStyles = makeStyles({
  root: {
    width: "100%",

    height: 100,
    paddingTop: "10px",
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",

    // display: 'inline-block'
  },
  left: {
    // paddingRight: "125px",
    // position: 'absolute',
    // display: 'flex',
    // justifyContent: 'space-between',
    // display: "inline-block",
    // marginRight: 200,
    // right: 10,
  },
  right: {
    // paddingTop: "40px",
    zIndex: 10,
    // display: "inline-block",
  },
  search: {
    width: "100%",
    background: "grey",
  },
  span: {
    color: "white",
    fontSize: "20px",
  },
});
const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles(props);

//   const debounceSearch = () => {
//       _.debounce(props.updateForm, 400)
//   }

  console.log(props.search);
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <img style={{ height: "100px", width: "250px" }} src={logo}></img>
          </div>
          <div className={classes.right}>
            <span>
              <PopperMenu currentUser={props.currentUser} />
            </span>
          </div>
        </div>
      </div>

      {!props.currentIncident ? (
        <>
          <br></br>
          <TextField
            onChange={(event) => props.updateForm(event)}
            value={props.search}
            className={classes.search}
            placeholder="Search Incidents..."
            id="outlined-basic"
            variant="outlined"
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                 )
                }}
          >
          </TextField>
          <br></br>
          <br></br>
          <span className={classes.span}>Incidents you should know about!</span>
        </>
      ) : null}
    </div>
  );
};

export default NavBar;
