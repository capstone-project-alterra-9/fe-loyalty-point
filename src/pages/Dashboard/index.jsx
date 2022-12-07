import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Auth from "../../utils/auth";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Logout Success",
        });
        Auth.signOut(navigate);
      }
    });
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
