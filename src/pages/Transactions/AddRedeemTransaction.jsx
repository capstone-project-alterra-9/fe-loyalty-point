import React, { useState } from "react";
import { PlusSvg } from "../../assets";

import { useDispatch } from "react-redux";
import { createRedeem } from "../../store/features/redeemSlice";
import Swal from "sweetalert2";

function AddRedeemTransaction() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const dispatch = useDispatch();

  const inputRedeem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentMethod = formData.get("paymentMethod");
    const userID = formData.get("userId");
    const productID = formData.get("productId");
    const identifierNum = formData.get("identifierNum");

    try {
      dispatch(
        createRedeem({ paymentMethod, userID, productID, identifierNum })
      ).then((res) => {
        if (!res.error) {
          Swal.fire({
            icon: "success",
            title: "Saved",
            text: "Redeem Transaction data successfully saved",
            showConfirmButton: false,
            timer: 2000,
            background: "#ffffff",
          });
          handleModal();
        } else {
          Swal.fire("Sorry", res.error.message.split(":")[1], "info");
        }
      });
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
          id="addRedeemModal"
          tabIndex={-1}
          aria-hidden="true"
          className="
          flex flex-row overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full shadow-xl"
        >
          <div className="relative w-full max-w-lg h-full md:h-auto rounded-lg shadow-lg">
            {/* Modal content */}
            <form
              action="#"
              className="relative bg-white rounded-lg"
              onSubmit={inputRedeem}
            >
              {/* Modal header */}
              <div className="flex p-4 rounded-t-lg border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Create Redeem Transaction
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6 pt-5 px-10">
                <div className="mb-4">
                  <label
                    htmlFor="paymentMethod"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" selected hidden>
                      Nothing Selected
                    </option>
                    <option value="redeem">Redeem</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    User ID
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="userId"
                    placeholder="Add User ID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Product ID
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="productId"
                    placeholder="Add Product ID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Identifier Num
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="identifierNum"
                    placeholder="Add Identifier Number (contoh : 08123457889999)"
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

export default AddRedeemTransaction;
