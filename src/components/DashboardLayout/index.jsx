import { Outlet } from "react-router";
import { AdminSidebar } from "../Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <AdminSidebar />
      <Outlet />
    </>
  );
};
