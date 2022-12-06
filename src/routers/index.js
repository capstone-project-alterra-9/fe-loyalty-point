import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components";
import {
  Dashboard,
  Products,
  Transactions,
  RedeemTransactions,
  Users,
} from "../pages";
const WebRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <Sidebar />

            <Routes>
              <Route path="/admin" element={<Dashboard></Dashboard>}></Route>
              <Route path="/admin/users" element={<Users></Users>}></Route>
              <Route
                path="/admin/transactions"
                element={<Transactions></Transactions>}
              ></Route>
              <Route
                path="/admin/redeemtransactions"
                element={<RedeemTransactions></RedeemTransactions>}
              ></Route>
              <Route
                path="/admin/products"
                element={<Products></Products>}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default WebRoutes;
