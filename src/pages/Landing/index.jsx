import { Helmet } from "react-helmet";
import {
  AppStore,
  DataQuota,
  feature1,
  feature2,
  feature3,
  feature4,
  Gift,
  GooglePlay,
  imgLanding2,
  imgLanding3,
  PhoneCredit,
  Shopping,
} from "../../assets";

export const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>JokoMart | Loyalty Point App</title>
      </Helmet>
      <section className="bg-gradient-to-r from-[#F5F9F5] via-[#BDD6BC] to-[#6F8A6E] container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row gap-24">
            <h2 className="text-3xl font-bold w-6/12 m-auto p-20">
              Buy Products get points to Redeem
              <p className="text-base font-normal py-5">
                Dapatkan poin dari setiap pembelian product yang ada di JokoMart
              </p>
              <div className="flex gap-3 py-3 w-40">
                <img src={GooglePlay} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </h2>
            <img
              alt="landing1"
              src={imgLanding2}
              className="cover mx-auto p-10 pl-5 pb-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-white container">
        <h1 className="text-center text-5xl font-bold pt-10 pb-5">
          How it Works
        </h1>
        <div className="flex justify-evenly py-10 gap-9 container flex-col lg:flex-row px-20">
          <div className="item flex flex-col items-center gap-5">
            <img src={PhoneCredit} alt="Phone" />
            <p className="text-center">Top Up Credit</p>
          </div>
          <div className="item flex flex-col items-center gap-5">
            <img src={DataQuota} alt="Phone" />
            <p className="text-center">Buy Data Quota</p>
          </div>
          <div className="item flex flex-col items-center gap-5">
            <img src={Shopping} alt="Phone" />
            <p className="text-center">Shopping</p>
          </div>
          <div className="item flex flex-col items-center gap-5">
            <img src={Gift} alt="Phone" />
            <p className="text-center">Redeem Reward</p>
          </div>
        </div>
      </section>
      <section className="bg-white container px-32 ">
        <h1 className="text-center text-5xl font-bold py-16">Our Features</h1>
        <div className="flex justify-between items-center gap-44">
          <img src={feature1} alt="feature1" className="px-10" />
          <h1 className="font-bold text-4xl p-10">
            Buy Credit, Data Quota, and other transactions
            <p className="text-base font-normal py-10">
              Make product purchases easily on JokoMart, and earn points from
              every purchase you make to redeem rewards.
            </p>
          </h1>
        </div>
        <div className="flex justify-between items-center gap-44 pt-20">
          <h1 className="font-bold text-4xl p-10">
            Loyalty Point
            <p className="text-base font-normal py-10">
              Be a member at JokoMart and do a lot of transactions to get a lot
              of interesting offers.
            </p>
          </h1>
          <img src={feature2} alt="feature1" className="px-10 w-1/2" />
        </div>
        <div className="flex justify-between items-center gap-44 pt-20 pb-20">
          <img src={feature3} alt="feature1" className="px-10" />
          <h1 className="font-bold text-4xl p-10">
            Redeem points with attractive prizes
            <p className="text-base font-normal py-10">
              Redeem Joko points that you can into many prizes. The more product
              purchases, the more prizes you will get.
            </p>
          </h1>
        </div>
      </section>
      <section className="container">
        <h1 className="text-center text-5xl font-bold pt-20 pb-16">
          What do they say about our app?
        </h1>
        <div className="px-96 pb-16">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg md:border-r shadow-xl">
            <blockquote className="max-w-2xl mx-auto text-gray-500 ">
              <h3 className="text-lg font-semibold text-gray-900 pb-5">
                "We're loving it. This is simply unbelievable! I like it more
                and more each day because it makes my life a lot easier."
              </h3>
            </blockquote>
            <figcaption className="flex flex-col items-center justify-center space-x-3">
              <div className="pb-4 pt-0 pl-2">
                <img
                  className="rounded-full w-14 h-14"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt=""
                />
              </div>
              <div className="space-y-0.5 font-medium text-center">
                <div>Mark Lodge</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Director, Next Big Thing
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-white container px-32 pb-20">
        <div className="flex justify-between items-center gap-44 pt-20">
          <h1 className="font-bold text-4xl p-10">
            More profit with JokoMart
            <p className="text-base font-normal py-10">
              Buy credit, quota Data, E-Money, and other transactions to get the
              best deals from JokoMart
              <div className="flex w-40 gap-3 pt-5">
                <img src={GooglePlay} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </p>
          </h1>
          <img src={feature4} alt="feature1" className="px-10 w-1/2" />
        </div>
      </section>
    </>
  );
};
