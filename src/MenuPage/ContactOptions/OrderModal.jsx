import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Success from "./Success";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal, setShowSuccess } from "../../Services/stateService";

function OrderModal({
  formData,
  selectedOption,
  selectedDate,
  total,
  AdditionalInfoOrder,
  timeValue,
}) {
  const showModal = useSelector((state) => state.showModal);
  const showSuccess = useSelector((state) => state.showSuccess);
  const addMenu = useSelector((state) => state.addMenu);
  const addMenuSalmonSet = useSelector((state) => state.addMenuSalmonSet);
  const addMenuHoso = useSelector((state) => state.addMenuHoso);
  const addMenuPhila = useSelector((state) => state.addMenuPhila);
  const addMenuRamen = useSelector((state) => state.addMenuRamen);
  const addMenuFried = useSelector((state) => state.addMenuFried);
  const dispatch = useDispatch();

  const handleModalOpen = () => dispatch(setShowModal(true));
  const handleModalClose = () => dispatch(setShowModal(false));

  const itemsWithQuantity = [
    { item: "Salmon", quantity: addMenu },
    { item: "Salmon set", quantity: addMenuSalmonSet },
    { item: "Hoso", quantity: addMenuHoso },
    { item: "Phila", quantity: addMenuPhila },
    { item: "Ramen", quantity: addMenuRamen },
    { item: "Fried", quantity: addMenuFried },
  ];

  const filteredItems = itemsWithQuantity.filter((item) => item.quantity >= 1);

  const handleModalSubmit = () => {
    // Here you can use the formData to perform any actions, e.g., sending the data to a server

    const timeValueBooking = () => {
      if (timeValue) {
        return timeValue;
      } else {
        return filteredItems;
      }
    };

    console.log(formData, timeValueBooking());
    handleModalClose();
    showSuccess && <Success />;
    dispatch(setShowSuccess(true));
  };

  return (
    <>
      {formData.selectedOption === "Book a table" && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          backdrop="static"
          keyboard={false}
          className="phone-resolution-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="logoFont ms-5">
              {selectedOption}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-main">
            <div className="d-grid justify-content-center text-center">
              <p className="text-success m-0 ">Date</p>{" "}
              {selectedDate.toDateString()} <br />
              <p className="text-success m-0">Time</p>{" "}
              {timeValue.split(":").slice(0, 2).join(":")} <br />
              <p className="text-success m-0">Name</p>
              {formData.name} <br />
              <p className="text-success m-0">Number of guests</p>{" "}
              {formData.number} <br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleModalSubmit}>
              Book
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {formData.selectedOption === "Take away" && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          backdrop="static"
          keyboard={false}
          className="phone-resolution-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="logoFont ms-5">
              {selectedOption}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-main">
            <div className="d-grid  text-center">
              <Badge bg="info" text="dark" className="p-3 mb-3 logoFontMedium">
                Delivery details
              </Badge>{" "}
              <p className="text-success m-0 ">Name</p>
              {formData.name}
              <br />
              <p className="text-success m-0 ">Phone</p>
              {formData.phoneNumber}
              <br />
              <p className="text-success m-0 ">Address</p> {formData.address}
              <br />
              <p className="text-success m-0 ">Order</p>
              {AdditionalInfoOrder}
              <br />
              <p className="text-success m-0">Total Amout</p>{" "}
              <h1>
                {" "}
                <Badge pill bg="info" text="dark">
                  {total} $
                </Badge>
              </h1>
            </div>
          </Modal.Body>
          <Modal.Footer className="logoFontMedium d- justify-content-center text-start">
            <Button
              className="w-30"
              variant="danger"
              onClick={handleModalClose}
            >
              Cancel
            </Button>
            <Button
              className="w-50"
              variant="success"
              onClick={handleModalSubmit}
            >
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showSuccess && <Success />}
      <Button variant="success" className="w-100" onClick={handleModalOpen}>
        Continue
      </Button>
    </>
  );
}

export default OrderModal;
