import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { hoso, phila, hosoPrice, philaPrice, currency } from "../ConstantsMenu";

function MenuPageMaki({
  addMenuHoso,
  showMinusHoso,
  handleAddHoso,
  handleMinusHoso,
  //
  addMenuPhila,
  showMinusPhila,
  handleAddPhila,
  handleMinusPhila,
}) {
  return (
    <div className=" appersCenter menu-item-1 noCursor">
      <h2 className="logoFontSmall">Maki</h2>

      <img src="./RollImages/hoso.png" className="image-height" alt="tuna" />
      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {hoso}
            </Badge>
            <Badge bg="danger" text="light">
              {hosoPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAddHoso}>
              Add{addMenuHoso === null ? "" : `ed: ${addMenuHoso}`}{" "}
            </Button>
            {showMinusHoso && (
              <Button variant="light" size="sm" onClick={handleMinusHoso}>
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      <img src="./RollImages/phila.png" className="image-height" alt="tuna" />
      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {phila}
            </Badge>
            <Badge bg="danger" text="light">
              {philaPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAddPhila}>
              Add{addMenuPhila === null ? "" : `ed: ${addMenuPhila}`}{" "}
            </Button>
            {showMinusPhila && (
              <Button variant="light" size="sm" onClick={handleMinusPhila}>
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuPageMaki;
