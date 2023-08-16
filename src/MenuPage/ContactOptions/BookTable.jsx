import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OrderModal from "./OrderModal";
import Calender from "./Calender";

function BookTable({ selectedOption, setSelectedOption }) {
  const [formData, setFormData] = useState({
    selectedOption: selectedOption,
    name: "",
    number: "",
    info: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Calender onSelectDate={handleSelectDate} />
            <p className="d-grid justify-content-center text-center">
              {selectedDate.toDateString()}
            </p>
          </Col>
          <Col>
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
              <FloatingLabel
                controlId="floatingSelect"
                label="Additional information"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="info"
                  value={formData.info}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <br />
            </Form.Group>
            <OrderModal
              selectedOption={selectedOption}
              formData={formData}
              setFormData={setFormData}
              setSelectedOption={setSelectedOption}
              selectedDate={selectedDate}
            />
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
export default BookTable;
