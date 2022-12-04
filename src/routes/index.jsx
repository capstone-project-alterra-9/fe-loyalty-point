import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { LandingPage } from "../pages/Landing";
import { LoginPage } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import PrivateRoute from "./privateRoute";
import ProtectedRoute from "./protectedRoute";

export const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        {/* Login Route */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* Admin Route */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/admin" element>
            <Route path="/admin/users" />
          </Route>
        </Route>
        {/* Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
