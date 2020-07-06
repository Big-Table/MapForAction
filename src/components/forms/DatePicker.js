import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {makeStyles} from '@material-ui/core'
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const useStyles = makeStyles({
  
})

function Example(props){

    const [startDate, setStartDate] = useState(new Date());
 
//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//   };
 
 
    return (
      <DatePicker
        name='date'
        inline
        selected={startDate}
        value={props.incidentForm.date}
        onChange={props.handleDate}
      />
    );
  
}

export default Example