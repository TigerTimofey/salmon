import React, { useState } from "react";
import { Link } from "react-scroll";
import { Row, Col } from "react-bootstrap";

function MainMenu() {
  const [colorMenu, setColorMenu] = useState("text-white");

  const handleColorDanger = () => {
    setColorMenu("text-danger");
  };
  const handleColorWhite = () => {
    setColorMenu("text-white");
  };

  return (
    <div className="fixed-top phone-menu-hidden">
      <Row className="p-3">
        <Col xs={3} className="text-center">
          <Link to="WelcomePage" smooth={true} duration={100}>
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorWhite}
            >
              Main
            </h5>
          </Link>
        </Col>
        <Col xs={3} className="text-center">
          <Link to="MainMenuProducts" smooth={true} duration={100}>
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorDanger}
            >
              Menu
            </h5>
          </Link>
        </Col>
        <Col xs={3} className="text-center">
          <Link to="Place" smooth={true} duration={100}>
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorWhite}
            >
              Feedback
            </h5>
          </Link>
        </Col>
        <Col xs={3} className="text-center">
          <Link to="Contact" smooth={true} duration={100}>
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorDanger}
            >
              Booking
            </h5>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default MainMenu;
