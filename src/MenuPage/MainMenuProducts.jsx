import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-scroll";

import MenuPageNigiri from "./MenuPageNigiri";
import MenuPageMaki from "./MenuPageMaki";
import MenuSoup from "./MenuSoup";
import Cart from "./Cart/Cart";

function MainMenuProducts({
  addMenu,
  showMinus,
  handleAdd,
  handleMinusAdd,
  //
  handleAddSalmonSet,
  showMinusSalmonSet,
  addMenuSalmonSet,
  handleMinusAddSalmonSet,
  //
  addMenuHoso,
  showMinusHoso,
  handleAddHoso,
  handleMinusHoso,
  //
  addMenuPhila,
  showMinusPhila,
  handleAddPhila,
  handleMinusPhila,
  //
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
    <div className="App App-header-white logoFontSmall">
      <Container>
        <Row xs={12}>
          <p className="logoFontMedium  ">M E N U</p>{" "}
          <Row className="phone-menu logoFontSmall">
            <Col xs={4} md={4}>
              <MenuPageNigiri
                addMenu={addMenu}
                showMinus={showMinus}
                handleAdd={handleAdd}
                handleMinusAdd={handleMinusAdd}
                //
                addMenuSalmonSet={addMenuSalmonSet}
                showMinusSalmonSet={showMinusSalmonSet}
                handleAddSalmonSet={handleAddSalmonSet}
                handleMinusAddSalmonSet={handleMinusAddSalmonSet}
                //
              />
            </Col>

            <Col xs={4} md={4}>
              <MenuPageMaki
                addMenuHoso={addMenuHoso}
                showMinusHoso={showMinusHoso}
                handleAddHoso={handleAddHoso}
                handleMinusHoso={handleMinusHoso}
                //
                addMenuPhila={addMenuPhila}
                showMinusPhila={showMinusPhila}
                handleAddPhila={handleAddPhila}
                handleMinusPhila={handleMinusPhila}
              />
            </Col>
            <Col xs={4} md={4}>
              <MenuSoup
                addMenuRamen={addMenuRamen}
                showMinusRamen={showMinusRamen}
                handleAddRamen={handleAddRamen}
                handleMinusRamen={handleMinusRamen}
                //
                addMenuFried={addMenuFried}
                showMinusFried={showMinusFried}
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
