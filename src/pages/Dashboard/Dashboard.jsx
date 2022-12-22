import React, { useEffect, useState } from "react";
import "../../assets/styles/Dashboard.css";
import { HiCheckCircle } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";
import {
  MdMonetizationOn,
  MdSignalCellularAlt,
  MdStackedLineChart,
  MdCancel,
} from "react-icons/md";
import {
  // faFile,
  // faImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserApi from "./../../apis/users.api";
import ProductApi from "../../apis/produts.api";
import TransactionApi from "../../apis/transaction.api";
import { UsersIcon } from "../../assets";
function Dashboard() {
  const [totalUsers, setTotalUsers] = useState();
  const [soldProduct, setSoldProduct] = useState();
  const [stockProduct, setStockProduct] = useState();
  const [totalTransactions, setTotalTransactions] = useState();
  const [totalFailed, setTotalFailed] = useState();
  const [totalSuccess, setTotalSuccess] = useState();

  useEffect(() => {
    UserApi.countUsers().then((res) => {
      setTotalUsers(res.data.data.totalCount);
    });
  }, [totalUsers]);

  useEffect(() => {
    ProductApi.countProduts().then((res) => {
      setSoldProduct(res.data.data.totalSoldProduct);
      setStockProduct(res.data.data.totalStockProduct);
    });
  }, [soldProduct, stockProduct]);
  useEffect(() => {
    TransactionApi.countTransactions().then((res) => {
      setTotalTransactions(res.data.data.totalTransactions);
      setTotalFailed(res.data.data.totalFailedTransactions);
      setTotalSuccess(res.data.data.totalSuccessTransactions);
      // console.log(res.data.data)
    });
  }, [totalTransactions, totalFailed, totalSuccess]);

  return (
    <>
      <div className="mx-14 px-0">
        <div className="pt-5 mt-3">
          <p className="fw-bold text-3xl font-bold mb-5 pl-5">
            Selamat Datang Di JokoMart Management System
          </p>
        </div>
        <div className="flex flex-wrap">
          {/* Total Users */}
          <div className="mt-4 w-full lg:w-4/12 px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <HiUser size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {totalUsers}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Total Users
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Total Product Sold  */}
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <MdMonetizationOn size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {soldProduct}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Total Product Sold
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Total Transactions */}
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <MdSignalCellularAlt size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {totalTransactions}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Total Transactions
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-6">
          {/* Transactions Success */}
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <HiCheckCircle size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {totalSuccess}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Transactions Success
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Stock */}
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <MdStackedLineChart size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {stockProduct}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Product Stock
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Transactions Failed */}
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <MdCancel size="40px" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      {totalFailed}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      Transactions Failed
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}
export default Dashboard;
