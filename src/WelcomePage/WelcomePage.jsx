import { useState } from "react";
import Badge from "react-bootstrap/Badge";

import MainMenu from "./MainMenu";
import Contact from "../MenuPage/Contact";
import MainMenuProducts from "../MenuPage/MainMenuProducts";
import Place from "../MenuPage/Place";

import { useDispatch } from "react-redux";
import { setIsButtonCartVisible } from "../Services/stateService";

function WelcomePage() {
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(setIsButtonCartVisible(true));

  const [addMenu, setAddMenu] = useState(null);
  const [addMenuSalmonSet, setAddMenuSalmonSet] = useState(null);
  const [addMenuHoso, setAddMenuHoso] = useState(null);
  const [addMenuPhila, setAddMenuPhila] = useState(null);
  const [addMenuRamen, setAddMenuRamen] = useState(null);
  const [addMenuFried, setAddMenuFried] = useState(null);

  const [showMinus, setShowMinus] = useState(false);
  const [showMinusSalmonSet, setShowMinusSalmonSet] = useState(false);
  const [showMinusHoso, setShowMinusHoso] = useState(false);
  const [showMinusPhila, setShowMinusPhila] = useState(false);
  const [showMinusRamen, setShowMinusRamen] = useState(false);
  const [showMinusFried, setShowMinusFried] = useState(false);

  //Salmon
  const handleAdd = () => {
    setAddMenu(addMenu + 1);
    setShowMinus(true);
    handleButtonClick();
  };
  const handleMinusAdd = () => {
    setAddMenu(addMenu - 1);
    if (addMenu < 1) {
      setAddMenu(0);
    }
    if (addMenu < 2) {
      setShowMinus(false);
    }
  };
  //Salmon Set
  const handleAddSalmonSet = () => {
    setAddMenuSalmonSet(addMenuSalmonSet + 1);
    setShowMinusSalmonSet(true);
    handleButtonClick();
  };
  const handleMinusAddSalmonSet = () => {
    setAddMenuSalmonSet(addMenuSalmonSet - 1);
    if (addMenuSalmonSet < 1) {
      setAddMenuSalmonSet(addMenuSalmonSet - 1);
    }
    if (addMenuSalmonSet < 2) {
      setShowMinusSalmonSet(false);
    }
  };
  //Hoso
  const handleAddHoso = () => {
    setAddMenuHoso(addMenuHoso + 1);
    setShowMinusHoso(true);
    handleButtonClick();
  };
  const handleMinusHoso = () => {
    setAddMenuHoso(addMenuHoso - 1);
    if (addMenuHoso < 1) {
      setAddMenuHoso(addMenuHoso - 1);
    }
    if (addMenuHoso < 2) {
      setShowMinusHoso(false);
    }
  };
  //Phila
  const handleAddPhila = () => {
    setAddMenuPhila(addMenuPhila + 1);
    setShowMinusPhila(true);
    handleButtonClick();
  };
  const handleMinusPhila = () => {
    setAddMenuPhila(addMenuPhila - 1);
    if (addMenuPhila < 1) {
      setAddMenuPhila(addMenuPhila - 1);
    }
    if (addMenuPhila < 2) {
      setShowMinusPhila(false);
    }
  };
  //Ramen
  const handleAddRamen = () => {
    setAddMenuRamen(addMenuRamen + 1);
    setShowMinusRamen(true);
    handleButtonClick();
  };
  const handleMinusRamen = () => {
    setAddMenuRamen(addMenuRamen - 1);
    if (addMenuRamen < 1) {
      setAddMenuRamen(addMenuRamen - 1);
    }
    if (addMenuRamen < 2) {
      setShowMinusRamen(false);
    }
  };
  //Fried
  const handleAddFried = () => {
    setAddMenuFried(addMenuFried + 1);
    setShowMinusFried(true);
    handleButtonClick();
  };
  const handleMinusFried = () => {
    setAddMenuFried(addMenuFried - 1);
    if (addMenuPhila < 1) {
      setAddMenuFried(addMenuFried - 1);
    }
    if (addMenuPhila < 2) {
      setShowMinusFried(false);
    }
  };

  return (
    <>
      <div id="WelcomePage">
        <div className={"App App-header"}>
          <MainMenu />

          <p className="logoFont p-3 noCursor">
            Hello{" "}
            <Badge pill bg="danger" text="light">
              Salmon
            </Badge>{" "}
            Lover
          </p>
          <img src="./sushiLogo.png" className="App-logo p-3" alt="logo" />
        </div>
      </div>
      <div id="MainMenuProducts">
        <MainMenuProducts
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
          addMenuHoso={addMenuHoso}
          showMinusHoso={showMinusHoso}
          handleAddHoso={handleAddHoso}
          handleMinusHoso={handleMinusHoso}
          //
          addMenuPhila={addMenuPhila}
          showMinusPhila={showMinusPhila}
          handleAddPhila={handleAddPhila}
          handleMinusPhila={handleMinusPhila}
          //
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
      </div>
      <div id="Place">
        <Place />
      </div>

      <div id="Contact">
        <Contact
          addMenu={addMenu}
          addMenuSalmonSet={addMenuSalmonSet}
          addMenuHoso={addMenuHoso}
          addMenuPhila={addMenuPhila}
          addMenuRamen={addMenuRamen}
          addMenuFried={addMenuFried}
        />
      </div>
    </>
  );
}

export default WelcomePage;
