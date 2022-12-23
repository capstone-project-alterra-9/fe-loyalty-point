import { Outlet } from "react-router";
import { DashboardNavbar } from "../DashboardNavbar";
import { AdminSidebar } from "../Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex row">
        <AdminSidebar />
        <div className="flex flex-col w-4/5">
          <DashboardNavbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
