import React, { useState } from "react";
import { Link } from "react-scroll";

function MainMenu() {
  const [colorMenu, setColorMenu] = useState("text-white");

  const handleColorDanger = () => {
    setColorMenu("text-danger");
  };

  return (
    <>
      <div className="d-flex justify-content-between p-3 fixed-top">
        <Link to="MainMenuProducts" smooth={true} duration={100}>
          <h5
            className={`menu-main logoFontSmall flex-fill ms-5 ${
              colorMenu === "text-danger" ? "text-danger" : ""
            }`}
            onClick={handleColorDanger}
          >
            M e n u
          </h5>
        </Link>

        <Link to="Contact" smooth={true} duration={100}>
          <h5
            className={`menu-main logoFontSmall flex-fill ms-5 ${
              colorMenu === "text-danger" ? "text-danger" : ""
            }`}
            onClick={handleColorDanger}
          >
            B o o k i n g
          </h5>
        </Link>
      </div>
    </>
  );
}

export default MainMenu;
