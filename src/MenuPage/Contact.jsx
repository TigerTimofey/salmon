import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import BookTable from "./ContactOptions/BookTable";
import TakeAway from "./ContactOptions/TakeAway";

function Contact() {
  const selectOptions = ["Book a table", "Take away"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App-header-white logoFontSmall">
      <h2 className="logoFont pb-5 mb-5">
        Book{" "}
        <img
          src="./sushiLogo.png"
          className="App-logo p-0 height-order"
          alt="logo"
        />{" "}
        Order
      </h2>
      <Form>
        <Form.Select size="sm" onChange={handleSelectChange}>
          <option>Choose your option</option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
        <br />
        {selectedOption === "Book a table" && (
          <BookTable
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
        {selectedOption === "Take away" && (
          <TakeAway
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
      </Form>
    </div>
  );
}

export default Contact;
