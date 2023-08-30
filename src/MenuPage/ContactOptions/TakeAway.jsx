import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-scroll";

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

import { useSelector } from "react-redux";

function TakeAway({ selectedOption, setSelectedOption }) {
  const addMenu = useSelector((state) => state.addMenu);
  const addMenuSalmonSet = useSelector((state) => state.addMenuSalmonSet);
  const addMenuHoso = useSelector((state) => state.addMenuHoso);
  const addMenuPhila = useSelector((state) => state.addMenuPhila);
  const addMenuRamen = useSelector((state) => state.addMenuRamen);
  const addMenuFried = useSelector((state) => state.addMenuFried);

  const [formData, setFormData] = useState({
    selectedOption: selectedOption,
    name: "",
    phoneNumber: "",
    address: "",
    info: "",
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      if (/^[A-Za-z]*$/.test(value) || value === "") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "phoneNumber") {
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
              {/* {addMenu === null || (addMenu === 0 && addMenuSalmonSet === 0) */}
              {addMenu > 0 ||
              addMenuSalmonSet > 0 ||
              addMenuHoso > 0 ||
              addMenuPhila > 0 ||
              addMenuRamen > 0 ||
              addMenuFried > 0 ? (
                <Form.Control
                  as="textarea"
                  rows={10}
                  name="info"
                  value={formData.info}
                  onChange={handleInputChange}
                  placeholder={
                    (addMenu === null || addMenu === 0) &&
                    addMenuSalmonSet === 0
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
    ? `${friedRamen}  ${addMenuFried} tk. - ${friedRamenPrice * addMenuFried} $`
    : ""
}
`
                  }
                  readOnly
                />
              ) : (
                <Container className="d-flex">
                  <Row>
                    <Col xs={12}>
                      <p>Cart is empty</p>
                    </Col>
                    <Col xs={12}>
                      {" "}
                      <img
                        src="./cart.png"
                        alt="cart"
                        className="image-height-booking"
                      />
                    </Col>
                    <br />
                    <Col>
                      {" "}
                      <Link to="MainMenuProducts" smooth={true} duration={100}>
                        <Button>Go to menu</Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              )}
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
