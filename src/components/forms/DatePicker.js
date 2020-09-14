import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const useStyles = makeStyles({});

function Example(props) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    props.handleDate(date);
  };

  return (
    <DatePicker
      dateFormat="MMMM d, yyyy"
      name="date"
      inline
      selected={startDate}
      value={props.incidentForm.date}
      onChange={handleChange}
    />
  );
}

export default Example;
