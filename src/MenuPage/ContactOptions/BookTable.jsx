import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OrderModal from "./OrderModal";
import Calender from "./Calender";
import TimePicker from "react-time-picker";

function BookTable({ selectedOption }) {
  const [formData, setFormData] = useState({
    selectedOption: selectedOption,
    name: "",
    number: "",
    timeValue: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      if (/^[A-Za-z]*$/.test(value) || value === "") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "number") {
      if (/^[0-9]*$/.test(value) || value === "") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const initialTime = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [timeValue, onChange] = useState(initialTime);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={6} className="book-table-padding ">
            <FloatingLabel controlId="floatingSelect" label="Your name">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="floatingSelect" label="Number of guests">
              <Form.Control
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <br />
            <Form.Group className="mt-0" controlId="floatingInput">
              <div className="text-center">
                Select a time{" "}
                <TimePicker onChange={onChange} value={timeValue} />
              </div>

              <br />
            </Form.Group>
          </Col>{" "}
          <Col xs={6} md={6}>
            <div className="book-calender-padding">
              <Calender onSelectDate={handleSelectDate} />
            </div>
            <p className="d-grid justify-content-center text-center">
              {selectedDate.toDateString()}
            </p>
          </Col>
        </Row>
      </Container>
      <OrderModal
        selectedOption={selectedOption}
        formData={formData}
        setFormData={setFormData}
        selectedDate={selectedDate}
        timeValue={timeValue}
      />
    </div>
  );
}
export default BookTable;
