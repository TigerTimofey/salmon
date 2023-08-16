import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import OrderModal from "./OrderModal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TakeAway({ selectedOption, setSelectedOption }) {
  const [formData, setFormData] = useState({
    selectedOption: selectedOption,
    name: "",
    phoneNumber: "",
    address: "",
    info: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleSelectDate = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <div>
      <Container>
        <Row>
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
            <FloatingLabel controlId="floatingSelect" label="Phone number">
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="floatingSelect" label="Address">
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <br />
            <Form.Group className="mb-3" controlId="floatingInput">
              <Form.Label className="ms-2">Order</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="info"
                value={formData.info}
                onChange={handleInputChange}
              />
            </Form.Group>

            <OrderModal
              selectedOption={selectedOption}
              formData={formData}
              setFormData={setFormData}
              setSelectedOption={setSelectedOption}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default TakeAway;
