import React, { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Success() {
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success! Thank you!",
      showConfirmButton: false,
      timer: 2000,
    });
  }, []);

  return <p className="logoFontSmall text-center">SUCCESS!</p>;
}

export default Success;
