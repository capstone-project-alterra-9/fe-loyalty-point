import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import "../../assets/styles/Products.css";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";


import {MdDelete} from "react-icons/md"
function Products() {

  return (
    <>
      <div className="col main pt-5 mt-3">
        Products
        <div className="row">
          <div className="col-sm-9">
            <input type="search" placeholder="Search" />
            <button className="btn">
              <FaSearch />
            </button>
          </div>

          <div className="col-sm-3 justify-content-end">
            <AddProduct />
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
              <th>Category</th>
              <th>Serial Number</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Points</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>


             <tr>
              <td>Paket Data</td>
              <td>P001</td>
              <td>Paket 5GB</td>
              <td>Paket 5GB Untuk 15 Hari</td>
              <td>30000</td>
              <td>250</td>
              <td>100</td>
              <td>Image</td>
              <td>
                <EditProduct
                 />

                <MdDelete />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
