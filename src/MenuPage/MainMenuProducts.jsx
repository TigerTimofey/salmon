import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-scroll";

import MenuPageNigiri from "./MenuPageNigiri";
import MenuPageMaki from "./MenuPageMaki";
import MenuSoup from "./MenuSoup";
import Cart from "./Cart/Cart";

function MainMenuProducts({
  handleAdd,
  handleMinusAdd,
  //
  handleAddSalmonSet,
  handleMinusAddSalmonSet,

  handleAddHoso,
  handleMinusHoso,

  handleAddPhila,
  handleMinusPhila,

  handleAddRamen,
  handleMinusRamen,

  handleAddFried,
  handleMinusFried,
}) {
  return (
    <div className="App App-header-white logoFontSmall">
      <Container>
        <Row xs={12}>
          <p className="logoFontMedium noCursor ">M E N U</p>{" "}
          <Row className="phone-menu logoFontSmall">
            <Col xs={4} md={4}>
              <MenuPageNigiri
                handleAdd={handleAdd}
                handleMinusAdd={handleMinusAdd}
                handleAddSalmonSet={handleAddSalmonSet}
                handleMinusAddSalmonSet={handleMinusAddSalmonSet}
                //
              />
            </Col>

            <Col xs={4} md={4}>
              <MenuPageMaki
                handleAddHoso={handleAddHoso}
                handleMinusHoso={handleMinusHoso}
                // //

                handleAddPhila={handleAddPhila}
                handleMinusPhila={handleMinusPhila}
              />
            </Col>
            <Col xs={4} md={4}>
              <MenuSoup
                handleAddRamen={handleAddRamen}
                handleMinusRamen={handleMinusRamen}
                handleAddFried={handleAddFried}
                handleMinusFried={handleMinusFried}
              />
            </Col>

            <Col xs={12} className="container-cart">
              <Link to="Contact" smooth={true} duration={100}>
                <Cart />{" "}
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default MainMenuProducts;
