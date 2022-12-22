import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Swal from "sweetalert2";
import {
  BuyIcon,
  BuySvg,
  DashboardIcon,
  DashboardSvg,
  LogoutIcon,
  LogoutSvg,
  ProductIcon,
  ProductSvg,
  RedeemIcon,
  RedeemSvg,
  TransactionIcon,
  TransationSvg,
  UsersIcon,
  UsersSvg,
} from "../../assets";
import JokoMartLogo from "../../assets/svg/logo.svg";
import Auth from "../../utils/auth";

export const AdminSidebar = () => {
  const [open, setOpen] = useState(true);
  const [Dropdown, setDropdown] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#566B55",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          toast: "true",
          icon: "success",
          title: "Logout Success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
        Auth.signOut(navigate);
      }
    });
  };

  return (
    <>
      <div
        className={`${
          open ? "w-1/5" : "w-20 h-screen"
        } duration-200 bg-[#566B55] relative shadow-lg`}
      >
        {/* <FontAwesomeIcon
          icon={faAngleLeft}
          className={`${
            !open && "rotate-180"
          }  absolute cursor-pointer -right-3 top-9 h-4 p-2 border-2 border-[#84a282] rounded-full bg-white`}
          onClick={() => setOpen(!open)}
        /> */}
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
        {/* Dashboard Item */}
        <ul className="pt-5 pb-24">
          <NavLink to="/admin/dashboard">
            <li
              className={` flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141]
               `}
            >
              <DashboardIcon />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Dashboard
              </span>
            </li>
          </NavLink>
          <NavLink to="/admin/users">
            <li
              className={`flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            >
              <UsersIcon />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Users
              </span>
            </li>
          </NavLink>
          <li
            className={` flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-3 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            onClick={() => setDropdown(!Dropdown)}
          >
            <TransactionIcon />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-bold text-md`}
            >
              Transactions
            </span>
            <MdKeyboardArrowDown
              size="24px"
              className={`${Dropdown && " transition rotate-180 "} transition`}
            />
          </li>
          <NavLink to="/admin/transactions">
            <li
              className={`${
                Dropdown && "hidden"
              } flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            >
              <BuyIcon />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Buy
              </span>
            </li>
          </NavLink>

          <NavLink to="/admin/redeemtransactions">
            <li
              className={`${
                Dropdown && "hidden"
              } flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            >
              <RedeemIcon />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Redeem
              </span>
            </li>
          </NavLink>

          <NavLink to="/admin/products">
            <li
              className={` flex rounded-xl mx-4 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            >
              <ProductIcon />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-bold text-md`}
              >
                Product
              </span>
            </li>
          </NavLink>
          <li
            className={`${
              Dropdown ? "mt-28" : "mt-14"
            } flex rounded-xl mx-6 cursor-pointer text-white hover:bg-white hover:text-[#566B55] text-sm items-center gap-x-4 px-10 fill-[#425141] hover:stroke-[#425141] 
               `}
            onClick={handleLogout}
          >
            <LogoutIcon />
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
    </>
  );
};
