import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { LandingPage } from "../pages/Landing";
import { LoginPage } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export const SetupRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />
        {/* Admin Route */}
        <Route>
          <Route path="/admin" />
        </Route>
        {/* Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
