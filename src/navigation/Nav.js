import { makeStyles } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import PopperMenu from "./PopperMenu";


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
    justifyContent: "space-between",

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
    width: "32vw",
    background: "grey",
  },
  span: {
    color: "white",
    fontSize: "20px",
    display: 'flex', 
    justifyContent: 'center'
  },
  test: {
      width: 100
  }
});
const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles(props);

//   const debounceSearch = _.debounce((event) => {
//       event.persist()
//       props.updateForm(event.persist())
//   }, 1000)

  console.log(props.search);
  console.log(props.currentUser)
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

   
      {!props.currentIncident && (
        <>
        <div>
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
              <span className={classes.span}> 
              {/* {props.currentUser.moderator} */}
              </span>
          </div>
        </>
      )
      }
    </div>
  );
};

export default NavBar;
