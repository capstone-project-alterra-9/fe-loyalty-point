import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
// import logo from"../../assets/icons/logo.svg"
import "../../assets/styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div
        className="col-auto min- vh-100 bg-image"
      >

          <div >
            <ul className="nav flex-column">
              <li >
                <h5>Loyalty App</h5>
                {/* <h5>{logo}</h5> */}
              </li>
              <li>
                <Link className="nav-link p-2" to="/">
                  <MdDashboard className="txt-color"/>
                  <span className="ms-1 d-none d-sm-inline txt-color">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link p-2" to="/users">
                  <FaUsers className="txt-color"/>
                  <span className="ms-1 d-none d-sm-inline txt-color">Users</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link p-2" to="/transactions">
                  <AiOutlineTransaction className="txt-color"/>
                  <span className="ms-1 d-none d-sm-inline txt-color">Transactions</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link p-2" to="/products">
                  <FiBox className="txt-color"/>
                  <span className="ms-1 d-none d-sm-inline txt-color">Products</span>
                </Link>
              </li>
              <div className="m-12">
                <li>
                  <Link className="nav-link p-12">
                    <span className="ms-1 d-none d-sm-inline txt-color">LOGOUT</span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>


      </div>
    </>
  );
};
export default Sidebar;
