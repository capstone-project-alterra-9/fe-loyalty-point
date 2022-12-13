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
  productSelectors,
} from "../../store/features/productSlice";

import { MdDelete } from "react-icons/md";
import { Table } from "flowbite-react";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
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
        {/* <table className="table table-bordered table-responsive">
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
              <tr key={product.ID}>
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
        </table> */}
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {products?.map((product) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={product.ID}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.category}
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>{product.image}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3">
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                    <a
                      href="/tables"
                      className="font-medium text-red-600 hover:underline dark:text-blue-500"
                    >
                      Delete
                    </a>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        {/* Modal */}
        <div></div>
      </div>
    </>
  );
}

export default Products;
