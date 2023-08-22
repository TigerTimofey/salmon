import Button from "react-bootstrap/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsButtonCartVisible } from "../../Services/stateService";

function CartBooking() {
  const isButtonCartVisible = useSelector((state) => state.isButtonCartVisible);
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(setIsButtonCartVisible(false));
  return (
    <>
      {isButtonCartVisible && (
        <Button
          variant="danger"
          className="cart-align"
          onClick={handleButtonClick}
        >
          <img src="cart.png" alt="cart" />
          <div>ORDER</div>
        </Button>
      )}
    </>
  );
}

export default CartBooking;
