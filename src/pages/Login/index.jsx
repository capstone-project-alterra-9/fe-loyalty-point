import { Button, Label } from "flowbite-react";
import LoginIcon from "../../assets/svg/logo.svg";
import BGLogin from "../../assets/img/Login.png";
import APIAuth from "../../apis/index";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await APIAuth.signin({
      email,
      password,
    })
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire("Username or Password is Incorrect", "", "error");
      });
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${BGLogin})` }}
        className="md:bg-cover bg-fixed"
      >
        <div className="container font-roboto">
          <div className="container px-6 mx-auto">
            <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
              <div className="flex flex-col w-full items-center lg:w-6/12">
                <img
                  src={LoginIcon}
                  alt="JokoMart"
                  className="min-w-[200px] max-w-sm"
                />
              </div>
              <div className="w-full md:w-full lg:w-6/12 mx-auto md:mx-0">
                <div className="bg-white p-8 flex flex-col drop-shadow-xl rounded-xl mx-20">
                  <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Login
                  </h2>
                  <form action className="w-full" onSubmit={handleSubmit}>
                    <div id="input" className="flex flex-col w-full my-3">
                      <Label
                        htmlFor="email"
                        className="text-gray-500 mb-2 text-left text-lg"
                      >
                        Email
                      </Label>
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-full"
                        placeholder="Insert your email"
                        name="email"
                        required
                        // onChange={handleChangeEmail}
                        // value={email}
                      />
                    </div>
                    <div id="input" className="flex flex-col w-full my-3">
                      <Label
                        htmlFor="password"
                        className="text-gray-500 mb-2 text-left"
                      >
                        Password
                      </Label>
                      <input
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-full"
                        placeholder="Insert your password"
                        name="password"
                        required
                        // onChange={handleChangeEmail}
                        // value={email}
                      />
                      <Button
                        type="submit"
                        pill={true}
                        className="mt-4 bg-[#425141] hover:bg-[#6F8A6E]"
                        style={{ backgroundColor: "#425141" }}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
