import Badge from "react-bootstrap/Badge";

function MenuPageNigiri() {
  return (
    <>
      <div className="App-header-white logoFont">
        <div className="menu-item-1">
          <h2 className="logoFont">N i g i r i</h2>

          <img
            src="./NigiriImages/salmon.png"
            className="text-slide-left image-height p-3"
            alt="salmon"
          />
          <p className="text-slide-left">
            <Badge bg="dark" text="light">
              Salmon
            </Badge>
            <Badge bg="danger" text="light">
              2.50$
            </Badge>
          </p>
          <img
            src="./NigiriImages/salmon3.png"
            className="text-slide-left image-height p-3"
            alt="salmonset"
          />
          <p className="text-slide-left">
            <Badge bg="dark" text="light">
              Salmon Set
            </Badge>
            <Badge bg="danger" text="light">
              6.50$
            </Badge>
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuPageNigiri;
