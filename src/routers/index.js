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
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/transactions" element={<Transactions />} />
              <Route
                path="/admin/redeemtransactions"
                element={<RedeemTransactions />}
              />
              <Route path="/admin/products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default WebRoutes;
