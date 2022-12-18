import React from "react";
import "../../assets/styles/Dashboard.css";
import { FaUser } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { MdSignalCellularAlt } from "react-icons/md";
import {
  AiFillCheckCircle,
  AiFillClockCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import { faFile, faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
  return (
    <div className="main pt-5 mt-3">
      <p className="lead d-none d-sm-block fw-bold text-3xl font-bold mb-5 px-24">
        Selamat Datang Di JokoMart Management System
      </p>
      {/* <div className="mb-3">
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card bg-color text-white h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <FaUser />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Pengguna Aplikasi</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <BiDollarCircle />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Total Produk Terjual</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <MdSignalCellularAlt />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Total Transaksi</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <AiFillCheckCircle />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Transaksi Berhasil</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <AiFillClockCircle />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Transaksi Berjalan</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="row">
                <div className="col-4 display-2 align-items-center">
                  <AiFillCloseCircle />
                </div>
                <div className="col-8">
                  <h2 className="">100</h2>
                  <h6 className="">Transaksi Gagal</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="containe vh-100r">
        <div class="flex flex-wrap justify-center px-20">
          <div class="mt-4 w-full lg:w-6/12 xl:w-6/12 px-5 mb-4 ">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      {" "}
                      Total Article
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {/* {countArticle} */}
                      <span className="text-sm"> Articles</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#84a282]">
                      <FontAwesomeIcon icon={faFile} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-4 w-full lg:w-6/12 xl:w-6/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      Total Gallery
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {/* {countGallery} */}
                      <span className="text-sm"> Galleries</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#84a282]">
                      <FontAwesomeIcon icon={faImage} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-4 w-full lg:w-6/12 xl:w-6/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      Total Gallery
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {/* {countGallery} */}
                      <span className="text-sm"> Galleries</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#84a282]">
                      <FontAwesomeIcon icon={faImage} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-4 w-full lg:w-6/12 xl:w-6/12 px-5">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-md">
                      Total Gallery
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      {/* {countGallery} */}
                      <span className="text-sm"> Galleries</span>
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-[#84a282]">
                      <FontAwesomeIcon icon={faImage} size="1x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="mt-4 w-full lg:w-6/12 xl:w-6/12 px-5 ">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      Sales
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      901
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                      <i class="fas fa-users"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="text-red-500 mr-2">
                    <i class="fas fa-arrow-down"></i> 1,25%{" "}
                  </span>
                  <span class="whitespace-nowrap"> Since yesterday </span>
                </p>
              </div>
            </div>
          </div>
          <div class="mt-4 w-full lg:w-6/12 xl:w-6/12 px-5 ">
            <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="flex-auto p-4">
                <div class="flex flex-wrap">
                  <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      Performance
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      51.02%{" "}
                    </span>
                  </div>
                  <div class="relative w-auto pl-4 flex-initial">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                      <i class="fas fa-percent"></i>
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="text-emerald-500 mr-2">
                    <i class="fas fa-arrow-up"></i> 12%{" "}
                  </span>
                  <span class="whitespace-nowrap"> Since last mounth </span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <br />
    </div>
  );
};
export default Dashboard;
