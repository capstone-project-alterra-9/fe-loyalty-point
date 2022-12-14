import { Navbar } from "flowbite-react";
import NavbarLogo from "../../assets/svg/NavbarLogo.svg";

export const MainHeader = () => {
  return (
    <div>
      <Navbar
        fluid={true}
        className="top-0 bg-gradient-to-r from-[#F5F9F5] via-[#BDD6BC] to-[#6F8A6E] fixed w-full"
      >
        <Navbar.Brand href="/">
          <img
            src={NavbarLogo}
            className="mr-3 ml-14 h-6 sm:h-9 w-100% pl-5"
            alt="JokoMart"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ul class="flex flex-col p-3 md:flex-row md:space-x-14 md:mt-0 md:text-lg md:font-medium sm:gap-2 gap-0 px-28">
            <li>
              <a
                href="#home"
                class="block py-3 pl-3 pr-4 text-black hover:text-[#566B55] md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                class="block py-3 pl-3 pr-4 text-black hover:text-[#566B55] md:hover:bg-transparent md:p-0 "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testi"
                class="block py-3 pl-3 pr-4 text-black hover:text-[#566B55] md:hover:bg-transparent md:p-0 "
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#footer"
                class="block py-3 pl-3 pr-4 text-black hover:text-[#566B55] md:bg-transparent md:p-0 "
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
