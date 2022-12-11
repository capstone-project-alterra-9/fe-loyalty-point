import { Navbar } from "flowbite-react";
import NavbarLogo from "../../assets/svg/NavbarLogo.svg";
import NavbarShape from "../../assets/svg/NavbarShape.svg";

export const MainHeader = () => {
  return (
    <div>
      <Navbar
        fluid={true}
        sticky="top"
        style={{
          backgroundColor: "#425141",
          zIndex: "10",
          backgroundImage: `url("${NavbarShape}")`,
          backgroundSize: "cover",
          backgroundPositionY: "70%",
        }}
        className="top-0 shadow-lg"
      >
        <Navbar.Brand href="/">
          <img
            src={NavbarLogo}
            className="mr-3 ml-7 h-6 sm:h-9"
            alt="JokoMart"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul class="flex flex-col p-3 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium sm:gap-2 gap-0">
            <li>
              <a
                href="/"
                class="block py-3 pl-3 pr-4 text-white hover:text-[#9CC29B] md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-3 pl-3 pr-4 text-white hover:text-[#9CC29B] md:hover:bg-transparent md:p-0 "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-3 pl-3 pr-4 text-white hover:text-[#9CC29B] md:hover:bg-transparent md:p-0 "
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-3 pl-3 pr-4 text-white hover:text-[#9CC29B] md:bg-transparent md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};