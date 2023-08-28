import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  salmon,
  salmonSet,
  salmonPrice,
  salmonSetPrice,
  currency,
} from "../ConstantsMenu";

import { useSelector } from "react-redux";

function MenuPageNigiri({
  handleAdd,
  handleMinusAdd,

  handleAddSalmonSet,
  handleMinusAddSalmonSet,
}) {
  const addMenu = useSelector((state) => state.addMenu);
  const addMenuSalmonSet = useSelector((state) => state.addMenuSalmonSet);
  const showMinus = useSelector((state) => state.showMinus);
  const showMinusSalmonSet = useSelector((state) => state.showMinusSalmonSet);

  return (
    <div className=" appersCenter menu-item-1 noCursor">
      <h2 className="logoFontSmall">Nigiri</h2>

      <img
        src="./NigiriImages/salmon.png"
        className=" image-height p-3"
        alt="salmon"
      />
      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {salmon}
            </Badge>
            <Badge bg="danger" text="light">
              {salmonPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAdd}>
              Add{addMenu === null ? "" : `ed: ${addMenu}`}{" "}
            </Button>
            {showMinus && (
              <Button variant="light" size="sm" onClick={handleMinusAdd}>
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      <img
        src="./NigiriImages/salmon3.png"
        className=" image-height p-3"
        alt="salmonset"
      />

      <Container>
        <Row>
          <Col>
            <Badge bg="dark" text="light">
              {salmonSet}
            </Badge>
            <Badge bg="danger" text="light">
              {salmonSetPrice}
              {currency}
            </Badge>

            <Button variant="light" size="sm" onClick={handleAddSalmonSet}>
              Add
              {addMenuSalmonSet === null ? "" : `ed: ${addMenuSalmonSet}`}{" "}
            </Button>
            {showMinusSalmonSet && (
              <Button
                variant="light"
                size="sm"
                onClick={handleMinusAddSalmonSet}
              >
                <img src="trash.svg" alt="trash" />
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuPageNigiri;
