import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { DashboaardSvg } from "../../assets";
import JokoMartLogo from "../../assets/svg/logo.svg";
import Auth from "../../utils/auth";

export const AdminSidebar = () => {
  const [open, setOpen] = useState(true);

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
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } duration-200 h-screen bg-[#566B55] relative`}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`${
              !open && "rotate-180"
            }  absolute cursor-pointer -right-3 top-9 h-4 p-2 border-2 border-[#84a282] rounded-full bg-white`}
            onClick={() => setOpen(!open)}
          />
          <div className="px-3">
            <img
              src={JokoMartLogo}
              alt="JokoMart"
              className={`cursor-pointer w-auto bg-[#84a282] rounded-b-[50px] pt-2 px-4 shadow-lg ${
                !open && "scale-0"
              }`}
            />
          </div>
          <p
            className={`uppercase text-center p-3 -mt-5 text-white text-3xl font-bold bg-[#84a282] rounded-b-3xl ${
              !open ? "visible" : "scale-0"
            }`}
          >
            J
          </p>
          <ul className="pt-5">
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10
               `}
            >
              <img src={DashboaardSvg} alt="Dashboard" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Dashboard
              </span>
            </li>
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10
               `}
            >
              <img src={DashboaardSvg} alt="Dashboard" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Users
              </span>
            </li>
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10
               `}
            >
              <img src={DashboaardSvg} alt="Dashboard" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Transactions
              </span>
            </li>
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10
               `}
            >
              <img src={DashboaardSvg} alt="Dashboard" />
              <NavLink to="/admin/products">
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 font-bold text-md`}
                >
                  Product
                </span>
              </NavLink>
            </li>
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10
               `}
              onClick={handleLogout}
            >
              <img src={DashboaardSvg} alt="Dashboard" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
