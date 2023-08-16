import Badge from "react-bootstrap/Badge";
import MainMenu from "./MainMenu";
import Contact from "../MenuPage/Contact";
import MainMenuProducts from "../MenuPage/MainMenuProducts";

function WelcomePage() {
  return (
    <>
      <div className={"App App-header"}>
        <MainMenu />
        <p className="logoFont p-3">
          Hello{" "}
          <Badge pill bg="danger" text="light">
            Salmon
          </Badge>{" "}
          Lover
        </p>
        <img src="./sushiLogo.png" className="App-logo p-3" alt="logo" />
      </div>

      <div id="MainMenuProducts">
        <MainMenuProducts />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default WelcomePage;
