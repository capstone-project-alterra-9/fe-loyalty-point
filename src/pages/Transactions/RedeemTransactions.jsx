import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import "../../assets/styles/Transactions.css";
import AddRedeemTransaction from "./AddRedeemTransaction";
import EditRedeemTransaction from "./EditRedeemTransaction";


import {MdDelete} from "react-icons/md"
function RedeemTransactions() {

  return (
    <>
      {/* <div className="col main pt-5 mt-3"> */}
        <div className="col main mt-3 pt-5">
          Redeem Transactions
        <br />
        <div className="row">
          <div className="col-9">
            {" "}
            <input type="search" placeholder="Search" />
            <button className="btn">
              {" "}
              <FaSearch />{" "}
            </button>
          </div>

          <div className="col-3">
            <AddRedeemTransaction />
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
          <thead  className="th-color">
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Serial Number</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Point(s)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>28 November 2022</td>
              <td>ID012</td>
              <td>P001</td>
              <td>Paket Data</td>
              <td>Paket 5GB</td>
              <td>350</td>
              <td>Success</td>
              <td>
                <EditRedeemTransaction />
                <MdDelete/>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  );
}

export default RedeemTransactions;
