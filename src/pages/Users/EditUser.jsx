import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser, editUser } from "../../store/features/userSlice";
import { EditSvg } from "../../assets";
import Swal from "sweetalert2";

function EditUser({ user }) {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const { ID, username, email, password, points } = user;
  const [data, setdata] = useState({
    ID: ID,
    username: username,
    email: email,
    password: password,
    points: points,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { ID, username, email, password, points } = data;
      dispatch(
        editUser({
          ID,
          username,
          email,
          password,
          points: parseInt(points),
        })
      ).then((res) => {
        if (!res.error) {
          Swal.fire({
            icon: "success",
            title: "Saved",
            text: "User data successfully updated",
            showConfirmButton: false,
            timer: 2000,
            background: "#ffffff",
          });
          // handleModal()
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
      <div onClick={handleModal}>
        <img src={EditSvg} alt="" className="w-6" />
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
              className="relative bg-white rounded-lg"
              onSubmit={handleUpdate}
            >
              {/* Modal header */}
              <div className="flex p-4 rounded-t-lg border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Edit User Account
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6 pt-5 px-10">
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    id="base-input"
                    name="username"
                    placeholder="contoh : jokoronotomo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="base-input"
                    name="email"
                    placeholder="contoh : jokorono@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={email}
                    onChange={handleChange}
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
                    required
                    id="base-input"
                    name="password"
                    placeholder="contoh : jo******3"
                    min="0"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Points
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    required
                    name="points"
                    placeholder="contoh : 10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={points}
                    onChange={handleChange}
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
                  Update
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

export default EditUser;
