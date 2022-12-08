import { Helmet } from "react-helmet";
import { imglanding1 } from "../../assets";

export const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>JokoMart | Loyalty Point App</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-24">
          <h2 className="text-3xl font-bold w-6/12 m-auto p-20">
            Bayar Belanjaanmu Dengan Aplikasi JokoMart
          </h2>
          <img
            alt="landing1"
            src={imglanding1}
            className="cover mx-auto p-10 pl-5"
          />
        </div>
      </div>
    </>
  );
};
