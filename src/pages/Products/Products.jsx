import React, { useEffect, useState } from "react";
import "../../assets/styles/Products.css";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllProduct,
  deleteProduct,
} from "../../store/features/productSlice";

import { Table } from "flowbite-react";
import { DeleteSvg } from "../../assets";
import Swal from "sweetalert2";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    const swalDelete = Swal.mixin({
      customClass: {
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        icon: "text-secondary-yellow",
      },
    });
    swalDelete
      .fire({
        title: "Are you sure to delete this ?",
        text: "You can't undo this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteProduct(id));
          try {
            setTimeout(
              () =>
                Swal.fire({
                  icon: "success",
                  title: "Deleted",
                  text: "Products data has been deleted",
                  showConfirmButton: false,
                  timer: 2000,
                  background: "#ffffff",
                }),
              1000
            );
          } catch (error) {
            setTimeout(
              () =>
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Products data cannot deleted",
                  showConfirmButton: false,
                  timer: 2000,
                  background: "#ffffff",
                }),
              1000
            );
          }
        }
      });
  };

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
        <Table hoverable={true}>
          <Table.Head style={{ backgroundColor: "#566B55", color: "white" }}>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {products?.map((product, productIndex) => (
              <Table.Row
                className="bg-white text-gray-900 font-medium"
                key={product.ID}
              >
                <Table.Cell className="whitespace-nowrap text-center">
                  {productIndex + 1}
                </Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>
                  <p className="truncate">{product.image}</p>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3">
                    <EditProduct product={product} />

                    <img
                      src={DeleteSvg}
                      alt=""
                      className="w-6"
                      onClick={() => handleDelete(product.ID)}
                    />
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
