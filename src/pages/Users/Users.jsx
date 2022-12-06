import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import "../../assets/styles/Users.css";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

import {MdDelete} from "react-icons/md"
function Users() {
  return (
    <>
      <div className="col main pt-5 mt-3">
        Users
        <div className="row">
          <div className="col-9">
            {" "}
            <input type="search" placeholder="Search" />
            <button className="btn">
              <FaSearch />
            </button>
          </div>

          <div className="col-3">
            <AddUser />
            <button
              className="btn btn-color dropdown-toggle btn-space"
              type="button"
              data-toggle="dropdown"
            >
              <MdFilterAlt/>
              <span>Filter By</span>
            </button>
          </div>
        </div>
        <br />
        <table className="table table-bordered border-secondary table-responsive">
          <thead className="th-color">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Point(s)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>username1</td>
              <td>email@mail.com</td>
              <td>aaaaa</td>
              <td>7000</td>
              <td>
                <EditUser />
                <MdDelete/>
              </td>
            </tr>
          </tbody>
        </table>


      </div>
    </>
  );
}

export default Users;
