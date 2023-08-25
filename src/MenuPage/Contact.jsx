import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import BookTable from "./ContactOptions/BookTable";
import TakeAway from "./ContactOptions/TakeAway";

function Contact({
  addMenu,
  addMenuSalmonSet,
  addMenuHoso,
  addMenuPhila,
  addMenuRamen,
  addMenuFried,
}) {
  const selectOptions = ["Take away", "Book a table"];
  const [selectedOption, setSelectedOption] = useState("");
  const selectedRef = useRef(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    selectedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App-header-white logoFontSmall">
      <img
        src="./sushiLogo.png"
        className="App-logo p- height-order"
        alt="logo"
      />{" "}
      <h2 className="logoFont pb-5 mb-5 noCursor">Place an Order </h2>
      <Form>
        <Form.Select
          size="sm"
          onChange={handleSelectChange}
          className="text-center"
        >
          <option>Choose your option</option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
        <br />
        <div ref={selectedRef}>
          {selectedOption === "Book a table" && (
            <BookTable
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
          {selectedOption === "Take away" && (
            <TakeAway
              addMenu={addMenu}
              addMenuSalmonSet={addMenuSalmonSet}
              addMenuHoso={addMenuHoso}
              addMenuPhila={addMenuPhila}
              addMenuRamen={addMenuRamen}
              addMenuFried={addMenuFried}
              //
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </div>
      </Form>
    </div>
  );
}

export default Contact;
