import React, { useEffect } from "react";

import "../../assets/styles/Users.css";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

import { Table } from "flowbite-react";
import { DeleteSvg } from "../../assets";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import { deleteUsers, getAllUser } from "../../store/features/userSlice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { formatPoint } from "../../utils/formatPoint";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getAllUser());
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
          dispatch(deleteUsers(id));
          try {
            setTimeout(
              () =>
                Swal.fire({
                  icon: "success",
                  title: "Deleted",
                  text: "Users data has been deleted",
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
                  text: "Users data cannot deleted",
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

  const [currentItems, setCurrentItems] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mx-14 pt-5 mt-3">
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
            {currentItems?.map((user, userIndex) => (
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
                      ? user.password.substring(0, 20)
                      : user.password}
                  </p>
                </Table.Cell>
                <Table.Cell>{formatPoint(user.points)}</Table.Cell>
                <Table.Cell>{formatPoint(user.costPoints)}</Table.Cell>

                <Table.Cell>
                  <div className="flex gap-3">
                    <EditUser user={user} />

                    <img
                      src={DeleteSvg}
                      alt=""
                      className="w-6"
                      onClick={() => handleDelete(user.ID)}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="flex flex-row-reverse">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="inline-flex items-center pt-[25px]"
            breakClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-slate-100"
            pageLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-slate-100"
            activeLinkClassName="z-10 px-3 py-2 leading-tight text-slate-50 border border-[#566B55] bg-[#566B55] hover:bg-[#425141]"
            previousClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l "
            nextClassName="block px-3 py-2 leading-tight text-[#425141] bg-white border border-gray-300 rounded-r "
            disabledClassName="bg-[#7E868C] text-[#D7DBDF] border-[#7E868C]"
          />
        </div>
      </div>
    </>
  );
}

export default Users;
