import React, { useState } from "react";
import Calendar from "react-calendar";

import "./NewCalender.css";

function Calender({ onSelectDate }) {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (newValue) => {
    onChange(newValue);
    onSelectDate(newValue);
  };
  return (
    <>
      <div>
        <Calendar
          className={"Calender-special"}
          onChange={handleDateChange}
          value={value}
        />
      </div>
    </>
  );
}

export default Calender;
