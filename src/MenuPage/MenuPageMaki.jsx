import Badge from "react-bootstrap/Badge";

function MenuPageMaki() {
  return (
    <>
      <div className="App-header-white logoFont">
        <div className="menu-item-1 ">
          <h2 className="logoFont">M a k i</h2>

          <img
            src="./RollImages/hoso.png"
            className="text-slide-right image-height"
            alt="tuna"
          />
          <p className="text-slide-right">
            <Badge bg="dark" text="ligth">
              Hoso Salmon
            </Badge>
            <Badge bg="danger" text="light">
              5.95$
            </Badge>
          </p>
          <img
            src="./RollImages/phila.png"
            className="text-slide-right image-height"
            alt="salmon"
          />
          <p className="text-slide-right">
            <Badge bg="dark" text="ligth">
              Phila Salmon
            </Badge>
            <Badge bg="danger" text="light">
              11.95$
            </Badge>
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuPageMaki;
