import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import Success from "./Success";

function OrderModal({ formData, selectedOption, selectedDate }) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = () => {
    // Here you can use the formData to perform any actions, e.g., sending the data to a server
    console.log(formData);
    handleModalClose();
    showSuccess && <Success />;
    setShowSuccess(true);
    // setSelectedOption();
  };

  return (
    <>
      {formData.selectedOption === "Book a table" && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          backdrop="static"
          keyboard={false}
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
              <p className="text-success m-0">Name</p>
              {formData.name} <br />
              <p className="text-success m-0">Number of guests</p>{" "}
              {formData.number} <br />
              {/* Time:{formData.selectedOption} <br /> */}
              <p className="text-success m-0">Additional information</p>{" "}
              {formData.info} <br />
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
        >
          <Modal.Header closeButton>
            <Modal.Title className="logoFont ms-5">
              {selectedOption}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-main">
            <div className="d-grid justify-content-center text-center p-3">
              <div className="d-grid justify-content-center text-start p-3">
                <p className="logoFontMedium">Please confirm details</p>
              </div>
              <Badge bg="info" text="dark" className="p-3 mt-3 logoFontMedium">
                Delivery details
              </Badge>{" "}
              <br />
              <p className="text-success m-0 ">Address</p> {formData.address}
              <br />
              <p className="text-success m-0 ">Phone</p>
              {formData.phoneNumber}
              <br />
              <p className="text-success m-0 ">Additional information</p>
              {formData.info}
              <br />
            </div>
          </Modal.Body>
          <Modal.Footer className="logoFontMedium d-flex justify-content-center text-start">
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
