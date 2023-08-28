import { useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";

import MainMenu from "./MainMenu";
import Contact from "../MenuPage/Contact";
import MainMenuProducts from "../MenuPage/MainMenuProducts";
import Place from "../MenuPage/Place";

import { useDispatch } from "react-redux";
import {
  setIsButtonCartVisible,
  setAddMenu,
  setAddMenuSalmonSet,
  setAddMenuHoso,
  setAddMenuPhila,
  setAddMenuRamen,
  setAddMenuFried,
  setShowMinus,
  setShowMinusSalmonSet,
  setShowMinusHoso,
  setShowMinusPhila,
  setShowMinusRamen,
  setShowMinusFried,
} from "../Services/stateService";

// import lottie from "lottie-web";

function WelcomePage() {
  // const container = useRef(null);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("../MenuPage/data.json"),
  //   });
  // }, []);

  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(setIsButtonCartVisible(true));

  const addMenu = useSelector((state) => state.addMenu);
  const addMenuSalmonSet = useSelector((state) => state.addMenuSalmonSet);
  const addMenuHoso = useSelector((state) => state.addMenuHoso);
  const addMenuPhila = useSelector((state) => state.addMenuPhila);
  const addMenuRamen = useSelector((state) => state.addMenuRamen);
  const addMenuFried = useSelector((state) => state.addMenuFried);

  //Salmon
  const handleAdd = () => {
    dispatch(setAddMenu(addMenu + 1));
    dispatch(setShowMinus(true));
    handleButtonClick();
  };
  const handleMinusAdd = () => {
    dispatch(setAddMenu(addMenu - 1));
    if (addMenu < 1) {
      dispatch(setAddMenu(0));
    }
    if (addMenu < 2) {
      dispatch(setShowMinus(false));
    }
  };
  //Salmon Set
  const handleAddSalmonSet = () => {
    dispatch(setAddMenuSalmonSet(addMenuSalmonSet + 1));
    dispatch(setShowMinusSalmonSet(true));
    handleButtonClick();
  };
  const handleMinusAddSalmonSet = () => {
    dispatch(setAddMenuSalmonSet(addMenuSalmonSet - 1));
    if (addMenuSalmonSet < 1) {
      dispatch(setAddMenuSalmonSet(addMenuSalmonSet - 1));
    }
    if (addMenuSalmonSet < 2) {
      dispatch(setShowMinusSalmonSet(false));
    }
  };
  //Hoso
  const handleAddHoso = () => {
    dispatch(setAddMenuHoso(addMenuHoso + 1));
    dispatch(setShowMinusHoso(true));
    handleButtonClick();
  };
  const handleMinusHoso = () => {
    dispatch(setAddMenuHoso(addMenuHoso - 1));
    if (addMenuHoso < 1) {
      dispatch(setAddMenuHoso(addMenuHoso - 1));
    }
    if (addMenuHoso < 2) {
      dispatch(setShowMinusHoso(false));
    }
  };
  //Phila
  const handleAddPhila = () => {
    dispatch(setAddMenuPhila(addMenuPhila + 1));
    dispatch(setShowMinusPhila(true));
    handleButtonClick();
  };
  const handleMinusPhila = () => {
    dispatch(setAddMenuPhila(addMenuPhila - 1));
    if (addMenuPhila < 1) {
      dispatch(setAddMenuPhila(addMenuPhila - 1));
    }
    if (addMenuPhila < 2) {
      dispatch(setShowMinusPhila(false));
    }
  };
  //Ramen
  const handleAddRamen = () => {
    dispatch(setAddMenuRamen(addMenuRamen + 1));
    dispatch(setShowMinusRamen(true));
    handleButtonClick();
  };
  const handleMinusRamen = () => {
    dispatch(setAddMenuRamen(addMenuRamen - 1));
    if (addMenuRamen < 1) {
      dispatch(setAddMenuRamen(addMenuRamen - 1));
    }
    if (addMenuRamen < 2) {
      dispatch(setShowMinusRamen(false));
    }
  };
  //Fried
  const handleAddFried = () => {
    dispatch(setAddMenuFried(addMenuFried + 1));
    dispatch(setShowMinusFried(true));
    handleButtonClick();
  };
  const handleMinusFried = () => {
    dispatch(setAddMenuFried(addMenuFried - 1));
    if (addMenuPhila < 1) {
      dispatch(setAddMenuFried(addMenuFried - 1));
    }
    if (addMenuPhila < 2) {
      dispatch(setShowMinusFried(false));
    }
  };

  return (
    <>
      <div id="WelcomePage">
        <div className="App App-header">
          <MainMenu />

          <p className="logoFontMedium p-3 noCursor center-content">
            Hello{" "}
            <Badge pill bg="danger" text="light">
              SALMON
            </Badge>{" "}
            Lover
          </p>
          <img src="./sushiLogo.png" className="App-logo p-3" alt="logo" />
        </div>
      </div>

      <div id="MainMenuProducts">
        <MainMenuProducts
          handleAdd={handleAdd}
          handleMinusAdd={handleMinusAdd}
          handleAddSalmonSet={handleAddSalmonSet}
          handleMinusAddSalmonSet={handleMinusAddSalmonSet}
          handleAddHoso={handleAddHoso}
          handleMinusHoso={handleMinusHoso}
          handleAddPhila={handleAddPhila}
          handleMinusPhila={handleMinusPhila}
          handleAddRamen={handleAddRamen}
          handleMinusRamen={handleMinusRamen}
          handleAddFried={handleAddFried}
          handleMinusFried={handleMinusFried}
        />
      </div>
      <div id="Place">
        <Place />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default WelcomePage;
