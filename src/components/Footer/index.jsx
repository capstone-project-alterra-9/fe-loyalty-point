import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const MainFooter = () => {
  return (
    <>
      <footer className="relative bg-[#425141] pt-8 pb-6 text-white">
        <div className=" mx-auto px-4">
          <div className="  flex flex-wrap text-left lg:text-left justify-between pl-8">
            <div className="lg:w-4/12">
              <p className="text-xl fonat-semibold  mb-3 font-semibold">
                Contact Us
              </p>
              <p className="text-lg mt-0 mb-2 ">
                Jln. Sukarno Hatta Kec. Kotabumi Selatan Kab. Lampung Utara
                Prov. Lampung Indonesia 34517
              </p>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 hover:bg-[#9CC29B] shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" color="black" />
                </button>
                <button
                  className="bg-white text-lightBlue-400 hover:bg-[#9CC29B] shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="1x" color="black" />
                </button>
                <button
                  className="bg-white text-lightBlue-400 hover:bg-[#9CC29B] shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" color="black" />
                </button>
                <button
                  className="bg-white text-lightBlue-400 hover:bg-[#9CC29B] shadow-xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" color="black" />
                </button>
              </div>
              <div className="pt-6 px-auto underline hover:text-[#9CC29B]">
                <Link to="/login">Admin Page</Link>
              </div>
            </div>
            <div className="lg:w-4/12">
              <p className="text-xl fonat-semibold  mb-3 font-semibold">
                Information
              </p>
              <ul class="list-none">
                <li>Home</li>
                <li>Feature</li>
                <li>Testimonial</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="pr-8 justify-end w-4/12 ">
              <p className="text-xl fonat-semibold mb-3 font-semibold">
                Location
              </p>
              <div className="mapouter sm:invisible invisible xl:visible">
                <div className="gmap_canvas rounded ">
                  <iframe
                    className="gmap_iframe"
                    width="100%"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=500&height=220&hl=en&q=Joko mart&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                    title="Joko Mart"
                  />
                  <a href="https://formatjson.org/word-counter">Word Counter</a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:100%;height:220px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:220px;}.gmap_iframe {height:220px!important;}",
                  }}
                />
              </div>
            </div>
          </div>
          <hr className="my-5 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span>
                <a
                  href="/"
                  className="text-white hover:text-[#9CC29B]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  JokoMart
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
