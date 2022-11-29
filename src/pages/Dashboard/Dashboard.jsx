import React from "react";
import "../../assets/styles/Dashboard.css";
const Dashboard = () => {

  return (
    <div className="col main pt-5 mt-3">
      <p className="lead d-none d-sm-block">Dashboard Loyality Point Agent</p>

      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card bg-color text-white h-100">

              <div className="rotate">
                <i className="fa fa-user fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Users</h6>
              <h1 className="display-4">100</h1>
            </div>

        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="rotate">
                <i className="fa fa-list fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Transactions</h6>
              <h1 className="display-4">100</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body bg-color">
              <div className="rotate">
                <i className="fab fa-twitter fa-4x"></i>
              </div>
              <h6 className="text-uppercase">Products</h6>
              <h1 className="display-4">100</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-color h-100">
            <div className="card-body">

              <h6 className="text-uppercase">Total Point</h6>
              <h1 className="display-4">2000</h1>
            </div>
          </div>
        </div>
      </div>
      <br />



    </div>
  );
};
export default Dashboard;
