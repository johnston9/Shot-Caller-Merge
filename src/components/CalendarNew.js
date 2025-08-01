// The React Calender Component 
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useHistory } from 'react-router-dom';
import { useSetDateContext } from '../contexts/DateContext';

const CalendarNew = (props) => {
  const [today, setToday] = useState(new Date());
    const [newdate, setNewdate] = useState("");
    const history = useHistory();
    // const setDate = useSetDateContext();
    const {days} = props;

const handleDate = (date) => {
  /* Function to convert timestamp to new format */
  const formatdate = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
  setNewdate(formatdate);
  console.log(`start ${formatdate}`);
  console.log(`date ${today}`);
}

  return (
    <div>
        <Calendar 
          onChange={(date) => handleDate(date) } 
          value={today} />
    </div>
  )
}

export default CalendarNew