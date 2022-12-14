import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdDashboard, MdCardGiftcard, MdLogout } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoMdCard } from "react-icons/io";
import { BiDollarCircle } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
// import logo from"../../assets/icons/logo.svg"
import "../../assets/styles/Sidebar.css";

const AdminSidebar = () => {
  return (
    <>
      <div className="col-auto bg-sbar h-auto">
        <div>
          <ul className="nav flex-column mt-5 pt-5">
            <li>
              <NavLink
                activeclassname="active"
                className="nav-link p-2 "
                to="/admin"
              >
                {/* <NavLink style={({isActive})=>{return {background: isActive?'#425141':''}}} className="nav-link p-2 " to="/admin"> */}
                <MdDashboard className="txt-color" />
                <span className=" p-2 m-3 d-none d-sm-inline txt-color">
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeclassname="active"
                className="nav-link p-2"
                to="/admin/users"
              >
                {/* <NavLink style={({isActive})=>{return {background: isActive?'#425141':''}}} className="nav-link p-2" to="/admin/users"> */}
                <BsPersonFill className="txt-color" />
                <span className="p-2 m-3 d-none d-sm-inline txt-color">
                  Users
                </span>
              </NavLink>
            </li>

            {/* <li>
              <NavLink   activeclassname="active" className="nav-link p-2" to="/admin/transactions">
                  <AiOutlineTransaction className="txt-color"/>
                  <span className="p-2 m-3 d-none d-sm-inline txt-color">Transactions</span>
                </NavLink>
              </li> */}

            <li>
              <NavLink
                activeclassname="active"
                className="nav-link p-2"
                to="/admin/transactions"
              >
                {/* <NavLink style={({isActive})=>{return {background: isActive?'#425141':''}}} className="nav-link p-2" to="/admin/transactions"> */}
                <button
                  className="btn btn-toggle collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#transaction-collapse"
                >
                  <IoMdCard className="txt-color" />
                  <span className="p-2 m-3 d-none d-sm-inline txt-color">
                    Transactions
                  </span>
                </button>
              </NavLink>
              <div className="collapse" id="transaction-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal">
                  <li>
                    <NavLink
                      className="link-dark rounded p-2"
                      to="/admin/transactions"
                    >
                      <BiDollarCircle className="txt-color" />
                      <span className="p-2 m-3 d-none d-sm-inline txt-color">
                        Buy
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="link-dark rounded p-2"
                      to="/admin/redeemtransactions"
                    >
                      <MdCardGiftcard className="txt-color" />
                      <span className="p-2 m-3 d-none d-sm-inline txt-color">
                        Reedem
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                activeclassname="active"
                className="nav-link p-2"
                to="/admin/products"
              >
                {/* <NavLink style={({isActive})=>{return {background: isActive?'#425141':''}}} className="nav-link p-2" to="/admin/products"> */}
                <FiBox className="txt-color" />
                <span className="p-2  m-3 d-none d-sm-inline txt-color">
                  Products
                </span>
              </NavLink>
            </li>

            <li className="border-top my-3"></li>
            <li>
              <Link className="nav-link" to="/login">
                <MdLogout className="txt-color" />
                <span className="ms-1 d-none d-sm-inline txt-color">
                  LOG OUT
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default AdminSidebar;
