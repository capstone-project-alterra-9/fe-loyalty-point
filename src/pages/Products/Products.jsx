import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import "../../assets/styles/Products.css";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  deleteProduct,
} from "../../store/features/productSlice";

import { MdDelete } from "react-icons/md";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const products = useSelector();
  useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
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
              <MdFilterAlt />
              <span>Filter By</span>
            </button>
          </div>
        </div>
        <br />
        <table className="table table-bordered table-responsive">
          <thead className="th-color">
            <tr>
              <th>Category</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.image}</td>
                <td>
                  <EditProduct />
                  <MdDelete
                    onClick={() => dispatch(deleteProduct(product.id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
