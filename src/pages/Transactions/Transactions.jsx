import React from "react";
import { FaSearch } from "react-icons/fa";
import "../../assets/styles/Users.css";
import AddTransaction from "./AddTransaction";
import EditTransaction from "./EditTransaction";


import {MdDelete} from "react-icons/md"
function Transactions() {

  return (
    <>
      {/* <div className="col main pt-5 mt-3"> */}
        <div className="col main mt-3 pt-5">
        Transactions
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
            <AddTransaction />

            <button
              className="btn btn-outline-dark dropdown-toggle btn-space"
              type="button"
              data-toggle="dropdown"
            >
              Filter By
            </button>
          </div>
        </div>
        <br />
        <table className="table table-bordered">
          <thead  className="th-color">
            <tr>
              <th>OrderID</th>
              <th>Tanggal</th>
              <th>Serial Number</th>
              <th>Nama Item</th>
              <th>Kategori</th>
              <th>Point</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID00123</td>
              <td>08 Nov 2022</td>
              <td>PD001</td>
              <td>Paket 5GB</td>
              <td>Paket Data</td>
              <td>1500</td>
              <td>
                <EditTransaction />
                <MdDelete/>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  );
}

export default Transactions;
