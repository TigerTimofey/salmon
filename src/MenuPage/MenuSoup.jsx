import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import {
  ramen,
  friedRamen,
  ramenPrice,
  friedRamenPrice,
  currency,
} from "../ConstantsMenu";
function MenuSoup({
  handleAddRamen,
  handleMinusRamen,

  handleAddFried,
  handleMinusFried,
}) {
  const addMenuRamen = useSelector((state) => state.addMenuRamen);
  const addMenuFried = useSelector((state) => state.addMenuFried);
  const showMinusRamen = useSelector((state) => state.showMinusRamen);
  const showMinusFried = useSelector((state) => state.showMinusFried);

  return (
    <div className=" appersCenter menu-item-1 noCursor">
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
            <Container className="d-flex justify-content-center align-items-center">
              <Stack direction="horizontal" gap={2} className="stack-no-wrap">
                <Button variant="light" size="sm" onClick={handleAddRamen}>
                  Add{addMenuRamen === null ? "" : `ed: ${addMenuRamen}`}{" "}
                </Button>
                {showMinusRamen && (
                  <Button variant="light" size="sm" onClick={handleMinusRamen}>
                    <img src="trash.svg" alt="trash" />
                  </Button>
                )}
              </Stack>
            </Container>
          </Col>
        </Row>
      </Container>

      <img
        src="./Soup/friedramen.png"
        className=" image-height "
        alt="friedRamen"
      />
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
            <Container className="d-flex justify-content-center align-items-center">
              <Stack direction="horizontal" gap={2} className="stack-no-wrap">
                <Button variant="light" size="sm" onClick={handleAddFried}>
                  Add{addMenuFried === null ? "" : `ed: ${addMenuFried}`}{" "}
                </Button>
                {showMinusFried && (
                  <Button variant="light" size="sm" onClick={handleMinusFried}>
                    <img src="trash.svg" alt="trash" />
                  </Button>
                )}
              </Stack>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuSoup;
