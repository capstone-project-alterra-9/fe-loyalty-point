import { Avatar, Navbar } from "flowbite-react";
import { NavbarIcon } from "../../assets";

export const DashboardNavbar = () => {
  return (
    <>
      <Navbar fluid={true} className="shadow-md" rounded={true}>
        <Navbar.Collapse></Navbar.Collapse>
        <div className="flex ">
          <p className="p-2 pr-4 text-xl font-semibold text-[#6F8A6E]">
            Hai, Joko
          </p>
          <Avatar alt="User settings" img={NavbarIcon} rounded={true} />
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
};
