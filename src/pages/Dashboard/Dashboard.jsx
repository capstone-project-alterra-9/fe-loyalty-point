import React, { useEffect } from "react";
import "../../assets/styles/Dashboard.css";
import { FaUser } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";
import {
  AiFillCheckCircle,
  AiFillClockCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { faFile, faImage, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/features/userSlice";
const Dashboard = () => {
  return (
    <>
      <div className="mx-auto px-0">
        <div className="pt-5 mt-3">
          <p className="fw-bold text-3xl font-bold mb-5 pl-5">
            Selamat Datang Di JokoMart Management System
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-6">
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full lg:w-4/12  px-5 ">
            <div className="relative flex flex-col min-w-0 break-words bg-[#566B55] rounded-2xl xl:mb-0 shadow-lg">
              <div className="flex-auto p-10">
                <div className="flex flex-wrap">
                  <div className="relative w-auto">
                    <div className="text-white text-center p-2 pr-8 justify-center inline-flex items-center">
                      <FontAwesomeIcon icon={faUser} size="2x" />
                    </div>
                  </div>
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <span className="font-bold text-3xl text-white ">
                      525
                      {/* <span className="text-sm"> Users</span> */}
                    </span>
                    <h5 className="text-white font-normal text-md">
                      User Application
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
};
export default Dashboard;
