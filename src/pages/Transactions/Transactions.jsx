import React, { useEffect } from "react";
import "../../assets/styles/Transactions.css";
import AddTransaction from "./AddTransaction";
import EditTransaction from "./EditTransaction";
import { Table } from "flowbite-react";
import Moment from "react-moment";
import { DeleteSvg, FailedStatus, SuccessStatus } from "../../assets";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getRedeem } from "../../store/features/redeemSlice";

function Transactions() {
  const dispatch = useDispatch();
  const redeem = useSelector((state) => state.redeem.data);
  console.log("redeem", redeem);

  useEffect(() => {
    dispatch(getRedeem());
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
      {/* <div className="col main pt-5 mt-3"> */}
      <div className="mx-auto pt-5 mt-3">
        <p className="text-3xl font-bold mb-5">Redeem Transactions</p>
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
            <AddTransaction />
          </div>
        </div>
        <br />
        <Table hoverable={true}>
          <Table.Head style={{ backgroundColor: "#566B55", color: "white" }}>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Order ID</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Point(s)</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {redeem?.map((redeem, redeemIndex) => (
              <Table.Row
                className="bg-white text-gray-900 font-medium"
                key={redeem.ID}
              >
                <Table.Cell className="whitespace-nowrap text-center">
                  {redeemIndex + 1}
                </Table.Cell>
                <Table.Cell>
                  <Moment date={redeem.createdAt} format="DD MMM YYYY" />
                </Table.Cell>
                <Table.Cell>{redeem.serialNumber}</Table.Cell>
                <Table.Cell>{redeem.category}</Table.Cell>
                <Table.Cell>{redeem.productName}</Table.Cell>
                <Table.Cell>{redeem.price}</Table.Cell>
                <Table.Cell>
                  {redeem.status === "success" ? (
                    <>
                      <img src={SuccessStatus} alt="Success" className="px-2" />
                    </>
                  ) : (
                    <>
                      <img src={FailedStatus} alt="Failed" className="px-2" />
                    </>
                  )}
                </Table.Cell>
                {/* <Table.Cell>{user.price}</Table.Cell>
                <Table.Cell>{user.stock}</Table.Cell> */}
                <Table.Cell>
                  <div className="flex gap-3">
                    <EditTransaction />

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

export default Transactions;
