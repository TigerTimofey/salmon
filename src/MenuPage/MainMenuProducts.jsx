import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuPageNigiri from "./MenuPageNigiri";
import MenuPageMaki from "./MenuPageMaki";
import MenuSoup from "./MenuSoup";

function MainMenuProducts() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p className="App logoFont">M E N U</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <MenuPageNigiri />
        </Col>
        <Col xs={4}>
          <MenuSoup />
        </Col>
        <Col xs={4}>
          <MenuPageMaki />
        </Col>
      </Row>
    </Container>
  );
}

export default MainMenuProducts;
