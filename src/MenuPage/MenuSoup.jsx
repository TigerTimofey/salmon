import Badge from "react-bootstrap/Badge";

function MenuSoup() {
  return (
    <>
      <div className="App-header-white logoFont">
        <div className="menu-item-1 ">
          <h2 className="logoFont">S o u p</h2>
          <img
            src="./Soup/ramen.png"
            className="soup image-height"
            alt="ramen"
          />
          <p className="soup">
            <Badge bg="dark" text="ligth">
              Ramen
            </Badge>
            <Badge bg="danger" text="light">
              14.50$
            </Badge>
          </p>
          <img
            src="./Soup/friedramen.png"
            className=" image-height"
            alt="friedramen"
          />
          <p className="soup">
            <Badge bg="dark" text="ligth">
              Fried Ramen
            </Badge>
            <Badge bg="danger" text="light">
              10.40$
            </Badge>
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuSoup;
