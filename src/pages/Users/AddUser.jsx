import React, { useState } from "react";
import "../../assets/styles/Users.css";

import { PlusSvg } from "../../assets";
import { useDispatch } from "react-redux";
import { createUsers } from "../../store/features/userSlice";
import Swal from "sweetalert2";

function AddUser() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleModal = () => {
    setModal(!modal);
  };

  const inputUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const point = Number(formData.get("point"));

    try {
      dispatch(createUsers({ username, email, password, point })).then(
        (res) => {
          if (!res.error) {
            Swal.fire({
              icon: "success",
              title: "Saved",
              text: "Users successfully saved",
              showConfirmButton: false,
              timer: 2000,
              background: "#ffffff",
            });
            handleModal();
          } else {
            Swal.fire("Sorry", res.error.message.split(":")[1], "info");
          }
        }
      );
    } catch (error) {
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
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className="
          flex flex-row overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full shadow-xl"
        >
          <div className="relative w-full max-w-lg h-full md:h-auto rounded-lg shadow-lg">
            {/* Modal content */}
            <form
              action="#"
              className="relative bg-white rounded-lg "
              onSubmit={inputUser}
            >
              {/* Modal header */}
              <div className="flex p-4 rounded-t-lg border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Create User Account
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6 pt-5 px-10">
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="base-input"
                    placeholder="contoh : jokorono@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="base-input"
                    placeholder="contoh : jokoronotomo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="password"
                    placeholder="contoh : jo******3"
                    min="0"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Point
                  </label>
                  <input
                    type="number"
                    name="point"
                    id="base-input"
                    placeholder="contoh : 10000"
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

export default AddUser;
