import React, {useState} from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';

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
    }, 
    tooltip: {
        backgroundColor: 'black', 
        color: '#FCC42C',
        fontSize: 13,
        // height: '20px', 
        // width: '10px'
    }, 
   
})

function ZipCodeSearch(){

    const classes = useStyles()

    const [zip, setZip] = useState('')

    const handleZip = (newZip) => {
        setZip(newZip)
    }

    const handleZipcodeInputPaste = e => {
        // test value: 123as8aa2129
        e.preventDefault();
    
        // get pasted content
        let pasteText = e.clipboardData.getData("text/plain");
        // only allow integers
        pasteText = pasteText.replace(/[^0-9]/g, "");
        // add to current input value (target)
        let newContent = e.target.value + pasteText;
        // only allow 5 digits total
        newContent = newContent.substring(0, 5);
        // set new value of input
        e.target.value = newContent;
        console.log(newContent)
        // set new state of zipcode
        handleZip(newContent)
    };

    const handleZipCodeChange = (e) => {

        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex
        if(e.target.value.length <= 5){
            if (e.target.value === '' || re.test(e.target.value)) {
                setZip(e.target.value)
            }
        }
    }

    const onZipCodeSearchClick = () => {
        console.log("hi")
    }

    console.log(zip)
    return(
        <div >
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
                style: {color: "#FCC42C"},
                endAdornment: (
                  <InputAdornment position="center">
                    <Tooltip 
                    classes={{
                        tooltip: classes.tooltip,
                        arrow: classes.arrow
                      }}
                    title='Search'>
                        <SearchIcon cursor='pointer' onClick={onZipCodeSearchClick}/>
                    </Tooltip>
                  </InputAdornment>
                 )
            }}
            />

        </div>
    )
}

export default ZipCodeSearch