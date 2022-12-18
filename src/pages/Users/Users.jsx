import React, { useEffect } from "react";

import "../../assets/styles/Users.css";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

import { Table } from "flowbite-react";
import { DeleteSvg } from "../../assets";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { getAllUser } from "../../store/features/userSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#566B55",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <div className="mx-auto pt-5 mt-3">
        <p className="text-3xl font-bold mb-5">Users Account</p>
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
            <AddUser />
          </div>
        </div>
        <br />
        <Table hoverable={true}>
          <Table.Head style={{ backgroundColor: "#566B55", color: "white" }}>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Username</Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>Current Point(s)</Table.HeadCell>
            <Table.HeadCell>Total Point(s)</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users?.map((user, userIndex) => (
              <Table.Row
                className="bg-white text-gray-900 font-medium"
                key={user.ID}
              >
                <Table.Cell className="whitespace-nowrap text-center">
                  {userIndex + 1}
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>
                  <p className="truncate">
                    {user.password.length > 20
                      ? `${user.password.substring(0, 20)}...`
                      : user.password}
                  </p>
                </Table.Cell>
                <Table.Cell>{user.points}</Table.Cell>
                <Table.Cell>{user.costPoints}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3">
                    <EditUser />

                    <img
                      src={DeleteSvg}
                      alt=""
                      className="w-6"
                      onClick={handleDelete}
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

export default Users;
