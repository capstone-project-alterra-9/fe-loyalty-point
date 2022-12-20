import { Avatar, Navbar } from "flowbite-react";

export const DashboardNavbar = () => {
  return (
    <>
      <Navbar fluid={true} className="shadow-md">
        <Navbar.Collapse></Navbar.Collapse>
        <div className="flex ">
          <p className="p-2">Hello jokorono</p>
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            rounded={true}
          />
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
};
