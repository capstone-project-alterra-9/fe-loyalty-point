import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/features/productSlice";

import Swal from "sweetalert2";
import { PlusSvg } from "../../assets";

function AddProduct() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };



  // const [err, setErr] = useState();
  // const regexName = /^[A-Za-z ]*$/
  // // const regexNumber = /^[0-9]+$/
  // const regexNumber = /^[1-9]+[0-9]*$/

  // const handleInput = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value;

  //   if (name === "name") {
  //     if (regexName.test(value)) {
  //       setErr("")
  //     } else {
  //       setErr("Nama produk harus berupa huruf")
  //     }
  //   } else if (name === "stock") {
  //     if (regexNumber.test(value)) {
  //       setErr("")
  //     } else {
  //       setErr("Stok harus berupa angka")
  //     }
  //   }
  // }

  const dispatch = useDispatch();

  const inputProduct = (e) => {
    e.preventDefault();
		const formData = new FormData(e.target);
    const category = formData.get("category");
    const name = formData.get("name");
    const description = formData.get("description");
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));
    const image = formData.get("image");

    try {
      dispatch(
        createProduct({category, name, description, price, stock, image})
      ).then((res) => {
        if(!res.error) {
          Swal.fire({
								icon: "success",
								title: "Saved",
								text: "Product data successfully saved",
								showConfirmButton: false,
								timer: 2000,
								background: "#ffffff",
							})
              handleModal()
        } else {
          Swal.fire("Sorry", res.error.message.split(":")[1], "info");
        }
      })
    } catch (error) {
      // console.log("error", error);
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse mb-5 ">
        <button
          type="button"
          className="text-white bg-[#566B55] font-medium rounded-lg text-sm px-6 py-2.5 mr-2 flex shadow-lg hover:bg-[#6F8A6E]"
          onClick={handleModal}
        >
          <img alt="" src={PlusSvg} className="mr-4"></img>
          <p className="pt-0.5">Add</p>
        </button>
      </div>

      {modal && (
        <div
          id="addProductModal"
          tabIndex={-1}
          aria-hidden="true"
          className="
          flex flex-row overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full shadow-xl"
        >
          <div className="relative w-full max-w-lg h-full md:h-auto rounded-lg shadow-lg">
            {/* Modal content */}
            <form action="#" className="relative bg-white rounded-lg" onSubmit={inputProduct}>
              {/* Modal header */}
              <div className="flex p-4 rounded-t-lg border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Create Product
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6 pt-5 px-10">
              <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" selected hidden>
                      Nothing Selected
                    </option>
                    <option value="credits">Credits</option>
                    <option value="data-quota">Data Quota</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="name"
                    // onChange={handleInput}
                    placeholder="contoh : Pulsa 10000"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* <p style={{color: "red"}}>{err}</p> */}
                </div>
                <div className="mb-4">
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      id="message"
                      name="description"
                      rows={2}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#566B55] focus:border-[#6F8A6E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Deskripsi produk"
                      required
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    name="price"
                    placeholder="contoh : 10000"
                    required
                    min="0"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    name="stock"
                    placeholder="contoh : 10"
                    // onChange={handleInput}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* <p>{err}</p> */}
                </div>

                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Image Title
                  </label>
                  <input
                    type="string"
                    id="base-input"
                    name="image"
                    placeholder="contoh : 10GB"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex justify-end p-4 pt-2 rounded-b-xl gap-2">
                <button
                  type="submit"
                  onClick={handleModal}
                  className="text-[#566B55] bg-white border-2  hover:border-[#566B55] focus:ring-2 focus:ring-[#566B55] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-[#566B55] hover:bg-[#6F8A6E] border-2 hover:border-[#6F8A6E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create
                </button>
              </div>
            </form>
            <div className="opacity-25 fixed inset-0 -z-10 bg-black"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddProduct;
