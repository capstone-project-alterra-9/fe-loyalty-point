import React, { Fragment, useEffect } from "react";
import "../../assets/styles/Transactions.css";
import AddRedeemTransaction from "./AddRedeemTransaction";
import EditRedeemTransaction from "./EditRedeemTransaction";
import { Table } from "flowbite-react";
import { DeleteSvg, FailedStatus, SuccessStatus } from "../../assets";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getRedeem } from "../../store/features/redeemSlice";
import Moment from "react-moment";

function RedeemTransactions() {
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
      {/* <div className="col main mt-3 pt-5">
          Redeem Transactions
        <br />
        <div className="row">
          <div className="col-9">
            {" "}
            <input type="search" placeholder="Search" />
            <button className="btn">
              {" "}
              <FaSearch />{" "}
            </button>
          </div>

          <div className="col-3">
            <AddRedeemTransaction />
            <button
              className="btn btn-color dropdown-toggle btn-space"
              type="button"
              data-toggle="dropdown"
            >
              <MdFilterAlt/>
              <span>Filter By</span>
            </button>
          </div>
        </div>
        <br />
        <table className="table table-bordered border-secondary table-responsive">
          <thead  className="th-color">
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Serial Number</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Point(s)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>28 November 2022</td>
              <td>ID012</td>
              <td>P001</td>
              <td>Paket Data</td>
              <td>Paket 5GB</td>
              <td>350</td>
              <td>Success</td>
              <td>
                <EditRedeemTransaction />
                <MdDelete/>
              </td>
            </tr>
          </tbody>
        </table>

      </div> */}
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
            <AddRedeemTransaction />
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
                    <EditRedeemTransaction />

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

export default RedeemTransactions;
