import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components";
import { Dashboard, Products, Transactions, Users } from "../pages";
const WebRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar />

            <Routes>
              <Route path="/" element={<Dashboard></Dashboard>}></Route>
              <Route path="/users" element={<Users></Users>}></Route>
              <Route
                path="/transactions"
                element={<Transactions></Transactions>}
              ></Route>
              <Route path="/products" element={<Products></Products>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default WebRoutes;
