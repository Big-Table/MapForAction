import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "absolute", 
        top: 60, 
        left: '.70%',
        width: '11.80%',
        zIndex: 10,
        backgroundColor: "#000000",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCC42C"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "green"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue"
          }
        // color: 'white'
        // color: "#FCC42C",
        // borderStyle: "solid",
        // borderColor: "#FCC42C",
        // borderWidth: 1,
        // height: 30,
        // width: 200,
        // borderRadius: 10,
        // fontFamily: 'Work Sans',
        // fontWeight: 700,
        // cursor: "pointer",
        // outline: "none",
        // verticalAlign: 'center'

    }
})

function ZipCodeSearch(){

    const classes = useStyles()

    return(
        <div >
            <TextField 
            className={classes.root}
            style={{color: 'white'}}
            placeholder='Enter Zip Code'
            id="outlined-basic" 
            variant="outlined"
            InputProps={{
                style: {color: "#FCC42C"},
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                 )
            }}
            />

        </div>
    )
}

export default ZipCodeSearch