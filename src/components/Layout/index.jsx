import { Outlet } from "react-router-dom";
import { MainHeader } from "../Header/index";
import { MainFooter } from "../Footer/index";

const Layout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default Layout;
