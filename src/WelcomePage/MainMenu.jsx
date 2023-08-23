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
    <div className="fixed-top">
      <Row className="p-3">
        <Col className="text-center">
          <Link to="WelcomePage">
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorWhite}
            >
              Welcome
            </h5>
          </Link>
        </Col>
        <Col className="text-center">
          <Link to="MainMenuProducts">
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
        <Col className="text-center">
          <Link to="Place">
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorWhite}
            >
              Place
            </h5>
          </Link>
        </Col>
        <Col className="text-center">
          <Link to="Contact">
            <h5
              className={`menu-main logoFontSmall ${
                colorMenu === "text-danger" ? "text-danger" : ""
              }`}
              onClick={handleColorDanger}
            >
              Reservation
            </h5>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default MainMenu;
