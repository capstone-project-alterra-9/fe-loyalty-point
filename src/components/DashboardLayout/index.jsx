import { Outlet } from "react-router";
import { DashboardNavbar } from "../DashboardNavbar";
import { AdminSidebar } from "../Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex row">
        <AdminSidebar />
        <div className="flex flex-col w-full">
          <DashboardNavbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
