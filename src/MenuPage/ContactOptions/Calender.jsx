import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calender({ onSelectDate }) {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (newValue) => {
    onChange(newValue);
    onSelectDate(newValue); // Call the prop function to pass the selected date
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} />
    </div>
  );
}

export default Calender;
