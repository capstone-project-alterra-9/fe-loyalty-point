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
const Dashboard = () => {
  return (
    <div className="main pt-5 mt-3">
      <p className="lead d-none d-sm-block fw-bold">
        Selamat Datang Di JokoMart Management System
      </p>
      <div className="mb-3">
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
      </div>
      <br />
    </div>
  );
};
export default Dashboard;
