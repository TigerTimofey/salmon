import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function TimePick() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}
export default TimePick;
