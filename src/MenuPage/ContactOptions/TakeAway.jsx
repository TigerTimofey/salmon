import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OrderModal from "./OrderModal";
import {
  salmon,
  salmonSet,
  hoso,
  phila,
  salmonPrice,
  salmonSetPrice,
  hosoPrice,
  philaPrice,
  ramenPrice,
  friedRamenPrice,
  ramen,
  friedRamen,
  deliveryFee,
  deliveryFeePrice,
} from "../../ConstantsMenu";

function TakeAway({
  selectedOption,
  setSelectedOption,
  addMenu,
  addMenuSalmonSet,
  addMenuHoso,
  addMenuPhila,
  addMenuRamen,
  addMenuFried,
}) {
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

  const total =
    salmonPrice * addMenu +
    salmonSetPrice * addMenuSalmonSet +
    addMenuHoso * hosoPrice +
    addMenuPhila * philaPrice +
    addMenuRamen * ramenPrice +
    addMenuFried * friedRamenPrice +
    deliveryFeePrice;

  const AdditionalInfoOrder =
    (addMenu === null || addMenu === 0) && addMenuSalmonSet === 0 ? (
      ""
    ) : (
      <>
        {addMenu !== null && addMenu !== 0 ? (
          <>
            {`${salmon} ${addMenu} tk. - ${salmonPrice * addMenu} $`}
            <br />
          </>
        ) : (
          ""
        )}
        {addMenuSalmonSet !== "" && addMenuSalmonSet > 0 ? (
          <>
            {`${salmonSet} ${addMenuSalmonSet} tk. - ${
              salmonSetPrice * addMenuSalmonSet
            } $`}
            <br />
          </>
        ) : (
          ""
        )}
        {addMenuHoso !== "" && addMenuHoso > 0 ? (
          <>
            {`${hoso} ${addMenuHoso} tk. - ${hosoPrice * addMenuHoso} $`}
            <br />
          </>
        ) : (
          ""
        )}
        {addMenuPhila !== "" && addMenuPhila > 0 ? (
          <>
            {`${phila} ${addMenuPhila} tk. - ${philaPrice * addMenuPhila} $`}
            <br />
          </>
        ) : (
          ""
        )}
        {addMenuRamen !== "" && addMenuRamen > 0 ? (
          <>
            {`${ramen}  ${addMenuRamen} tk. - ${ramenPrice * addMenuRamen} $`}
            <br />
          </>
        ) : (
          ""
        )}
        {addMenuFried !== "" && addMenuFried > 0 ? (
          <>
            {`${friedRamen} ${addMenuFried} tk. - ${
              friedRamenPrice * addMenuFried
            } $`}
            <br />
          </>
        ) : (
          ""
        )}
        {deliveryFee ? (
          <>
            {`${deliveryFee} - ${deliveryFeePrice} $`}
            <br />
          </>
        ) : (
          ""
        )}
      </>
    );

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
          </Col>
          <Col>
            <Form.Group className="mb-3 text-center" controlId="floatingInput">
              {/* <Form.Label className="ms-2 ">Order</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={10}
                name="info"
                value={formData.info}
                onChange={handleInputChange}
                placeholder={
                  (addMenu === null || addMenu === 0) && addMenuSalmonSet === 0
                    ? ""
                    : `
                    Order Details

  ${
    addMenu !== null && addMenu !== 0
      ? `${salmon} ${addMenu} tk. - ${salmonPrice * addMenu} $`
      : ""
  }
  ${
    addMenuSalmonSet !== "" && addMenuSalmonSet > 0
      ? `${salmonSet} ${addMenuSalmonSet} tk. - ${
          salmonSetPrice * addMenuSalmonSet
        } $`
      : ""
  }
  ${
    addMenuHoso !== "" && addMenuHoso > 0
      ? `${hoso} ${addMenuHoso} tk. - ${hosoPrice * addMenuHoso} $`
      : ""
  }
  ${
    addMenuPhila !== "" && addMenuPhila > 0
      ? `${phila} ${addMenuPhila} tk. - ${philaPrice * addMenuPhila} $`
      : ""
  }
  ${
    addMenuRamen !== "" && addMenuRamen > 0
      ? `${ramen} ${addMenuRamen} tk. - ${ramenPrice * addMenuRamen} $`
      : ""
  }
  ${
    addMenuFried !== "" && addMenuFried > 0
      ? `${friedRamen}  ${addMenuFried} tk. - ${
          friedRamenPrice * addMenuFried
        } $`
      : ""
  }
  `
                }
                readOnly
              />
            </Form.Group>
          </Col>

          <OrderModal
            total={total}
            AdditionalInfoOrder={AdditionalInfoOrder}
            selectedOption={selectedOption}
            formData={formData}
            setFormData={setFormData}
            setSelectedOption={setSelectedOption}
          />
        </Row>
      </Container>
    </div>
  );
}
export default TakeAway;
