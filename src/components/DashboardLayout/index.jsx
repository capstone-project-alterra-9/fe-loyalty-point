import { Outlet } from "react-router";
import { AdminSidebar } from "../Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex row">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  );
};
