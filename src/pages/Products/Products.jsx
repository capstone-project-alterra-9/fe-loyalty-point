import React, { useEffect, useState } from "react";
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
import { DeleteSvg, EditSvg } from "../../assets";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto pt-5 mt-3">
        <p className="text-3xl font-bold mb-5">Product Stock</p>
        <div className="flex flex-row justify-between">
          <div className="">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6F8A6E] focus:border-[#6F8A6E] block w-full pl-10 p-2.5  "
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-[#566B55] rounded-lg border border-[#566B55] hover:bg-[#6F8A6E] focus:ring-4 focus:outline-none focus:ring-[#6F8A6E] "
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="">
            <AddProduct />
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
          <Table.Head style={{ backgroundColor: "#566B55", color: "white" }}>
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
                      <img src={EditSvg} alt="" className="w-6" />
                    </a>
                    <a
                      href="/tables"
                      className="font-medium text-red-600 hover:underline dark:text-blue-500"
                    >
                      <img src={DeleteSvg} alt="" className="w-6" />
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
