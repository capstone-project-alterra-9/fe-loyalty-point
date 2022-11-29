import React from "react";
import { FaSearch } from "react-icons/fa";
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
            {" "}
            <input type="search" placeholder="Search" />
            <button className="btn">
              {" "}
              <FaSearch />{" "}
            </button>
          </div>

          <div className="col-sm-3 justify-content-end">
            <AddProduct />

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
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Nama Item</th>
              <th>Kategori</th>
              <th>Point</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>


             <tr >

              <td>PD001</td>
              <td>Paket 5 GB</td>
              <td>Paket Data</td>
              <td>1500</td>
              <td>100</td>

              <td>

                <EditProduct />



                <MdDelete/>



              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </>
  );
}

export default Products;
