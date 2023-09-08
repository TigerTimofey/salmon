import { useEffect } from "react";
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

  return null;
}

export default Success;
