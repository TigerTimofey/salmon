import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  ramen,
  friedRamen,
  ramenPrice,
  friedRamenPrice,
  currency,
} from "../ConstantsMenu";
function MenuSoup({
  addMenuRamen,
  showMinusRamen,
  handleAddRamen,
  handleMinusRamen,
  //
  addMenuFried,
  showMinusFried,
  handleAddFried,
  handleMinusFried,
}) {
  return (
    <div className=" appersCenter menu-item-1">
      <h2 className="logoFontSmall">Soup</h2>
      <img src="./Soup/ramen.png" className=" image-height " alt="ramen" />
      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {ramen}
            </Badge>
            <Badge bg="danger" text="light">
              {ramenPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAddRamen}>
              Add{addMenuRamen === null ? "" : `ed: ${addMenuRamen}`}{" "}
            </Button>
            {showMinusRamen && (
              <Button variant="light" size="sm" onClick={handleMinusRamen}>
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      <img src="./Soup/friedRamen.png" className=" image-height " alt="ramen" />
      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {friedRamen}
            </Badge>
            <Badge bg="danger" text="light">
              {friedRamenPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAddFried}>
              Add{addMenuFried === null ? "" : `ed: ${addMenuFried}`}{" "}
            </Button>
            {showMinusFried && (
              <Button variant="light" size="sm" onClick={handleMinusFried}>
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuSoup;
