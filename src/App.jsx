import { useState } from "react";
import Button from "./assets/components/button/Button";
import DetailPage from "./assets/components/detailPage/DetailPage";
import Line from "./assets/components/line/Line";
import ListNewsStory from "./assets/components/news/ListNewsStory";
import ListProduct from "./assets/components/product/ListProduct";

import { useEffect } from "react";

const menu = [
  "HOME",
  "PRODUCTS",
  "BLOG",
  "ABOUT",
  "CONTACT",
  "STYLEGUIDE",
  "HUYTRAN",
];

const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    //<div className="wrapper overflow-x-hidden  mx-auto 2xl:px-8  max-w-full ">
    //  <header className="w-full max-sm:px-4 xl:p-6 md:px-4 mx-auto ">
    //    <nav className="flex flex-row items-center justify-between max-sm:justify-center gap-2 ">
    //      <div className="relative text-xl max-sm:text-lg font-semibold text-center cursor-pointer logo basis-1/6">
    //        CoffeeStyle.
    //      </div>
    //      <div className="cs-list-menu-item hidden xl:flex">
    //        {menu.map((item, index) => {
    //          return (
    //            <span
    //              key={index}
    //              className="top-menu-item sm:hidden md:hidden xl:flex 2xl:flex"
    //            >
    //              {item}
    //            </span>
    //          );
    //        })}
    //      </div>
    //      <div className="flex items-center justify-center gap-2 p-4 max-sm:p-2 text-sm font-medium text-center hover:cursor-pointer cart basis-1/6">
    //        <svg
    //          xmlns="http://www.w3.org/2000/svg"
    //          fill="none"
    //          viewBox="0 0 24 24"
    //          strokeWidth={1.5}
    //          stroke="currentColor"
    //          className="stroke-2 size-6"
    //        >
    //          <path
    //            strokeLinecap="round"
    //            strokeLinejoin="round"
    //            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    //          />
    //        </svg>

    //        <span className="uppercase max-sm:hidden">Cart</span>
    //        <span className="w-6 text-center bg-orange-200 rounded-full max-sm:hidden">
    //          7
    //        </span>
    //      </div>

    //      {/*<div className="toggle menu-mobile hover:cursor-pointer  sm:block md:block lg:block xl:hidden ">
    //        <button
    //          onClick={() => setIsActive((active) => !active)}
    //          className={`p-4   ${isActive ? "bg-gray-200" : ""} `}
    //        >
    //          <svg
    //            xmlns="http://www.w3.org/2000/svg"
    //            fill="none"
    //            viewBox="0 0 24 24"
    //            strokeWidth={1.5}
    //            stroke="currentColor"
    //            className="size-6"
    //          >
    //            <path
    //              strokeLinecap="round"
    //              strokeLinejoin="round"
    //              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //            />
    //          </svg>
    //        </button>
    //        {isActive && (
    //          <div className="absolute w-full h-50 bg-gray-200 left-0 z-50 transition-all duration-500 ease-in-out">
    //            {menu.map((item, index) => {
    //              return (
    //                <span
    //                  key={index}
    //                  className="transition-all duration-500 ease-in-out relative w-full flex border-b-2 border-gray-400 border-opacity-80 flex-1  justify-center py-3 cursor-pointer hover:bg-gray-400 hover:text-white"
    //                >
    //                  {item}
    //                </span>
    //              );
    //            })}
    //          </div>
    //        )}
    //      </div>*/}
    //      <div className="toggle menu-mobile hover:cursor-pointer sm:block md:block lg:block xl:hidden">
    //        <button
    //          onClick={() => setIsActive((active) => !active)}
    //          className={`p-4 transition-all duration-500 ease-in-out ${
    //            isActive ? "bg-gray-200" : ""
    //          }`}
    //        >
    //          <svg
    //            xmlns="http://www.w3.org/2000/svg"
    //            fill="none"
    //            viewBox="0 0 24 24"
    //            strokeWidth={1.5}
    //            stroke="currentColor"
    //            className="size-6"
    //          >
    //            <path
    //              strokeLinecap="round"
    //              strokeLinejoin="round"
    //              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //            />
    //          </svg>
    //        </button>

    //        <div
    //          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
    //            isActive ? "max-h-96" : "max-h-0"
    //          }`}
    //        >
    //          <div
    //            className={`absolute transition-all duration-500 ease-in-out w-full bg-gray-200 left-0 z-50 ${
    //              isActive ? "max-h-96" : "hidden"
    //            }`}
    //          >
    //            {menu.map((item, index) => (
    //              <span
    //                key={index}
    //                className="transition-all duration-500 ease-in-out relative w-full flex border-b-2 border-gray-400 border-opacity-80 flex-1 justify-center py-3 cursor-pointer hover:bg-gray-400 hover:text-white"
    //              >
    //                {item}
    //              </span>
    //            ))}
    //          </div>
    //        </div>
    //      </div>
    //    </nav>
    //  </header>

    //  <main className="w-full max-sm:p-2 md:p-2 xl:p-6 2xl:p-6  mx-auto ">
    //    <div className="relative h-[550px] w-full flex justify-center items-center">
    //      <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)"></div>
    //      <div
    //        className="object-cover w-full h-full bg-bottom bg-no-repeat bg-cover slide"
    //        style={{
    //          backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/slider-bg.jpeg')`,
    //        }}
    //      ></div>
    //      <div className="absolute grid gap-6 text-center text-white top-14">
    //        <h6 className="text-xl max-sm:text-sm max-md:text-base xl:text-xl 2xl:text-xl">
    //          BEST PLACE TO BUY COFFEE
    //        </h6>
    //        {/*<h1 className=" 2xl:text-5xl max-xl:text-5xl xl:text-5xl max-sm:text-3xl max-md:text-4xl  font-bold">
    //          Coffee Mugs
    //        </h1>*/}
    //        <h1 className="text-5xl 2xl:text-5xl xl:text-5xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl font-bold">
    //          Coffee Mugs
    //        </h1>

    //        <h6 className="text-xl max-sm:text-sm max-md:text-base xl:text-xl 2xl:text-xl">
    //          The most versatile furniture system ever created. Designed to fit
    //          your life, made to move and grow.
    //        </h6>
    //        <div className="flex items-center justify-center ">
    //          <Button>Explore Our Products</Button>
    //        </div>
    //      </div>
    //    </div>
    //    <Line>OUR COFFEE STORY</Line>

    //    <div className="xl:flex 2xl:flex max-sm:grid grid-cols-1 xl:items-center xl:justify-center 2xl:items-center 2xl:justify-center gap-8 content max-w-screen-2xl">
    //      <div className="video basis-1/2">
    //        <video
    //          autoPlay
    //          loop
    //          muted
    //          className="w-full h-full object-cover min-h-[350px]"
    //        >
    //          <source
    //            src="https://coffee-style-trungquandev.web.app/video/coffee-video.mp4"
    //            frameBorder="0"
    //          ></source>
    //        </video>
    //      </div>
    //      <div className="pr-10 text-context basis-1/2">
    //        <h1 className="pr-10 mb-3 text-4xl leading-10 text-left">
    //          What is your most special coffee?
    //        </h1>
    //        <h1 className="mb-4 leading-7 text-left text-gray-500">
    //          The French Press is a brewing method that comes closest to
    //          cupping. Cupping is the prescribed method by which coffee should
    //          be judged. Nothing separates the water from the coffee. To
    //          properly discover the flavours, it is best to drink the coffee
    //          this way. Everyone has their favourite brewing method.
    //        </h1>
    //        <span
    //          className="text-[#A25F4B] font-semibold  border-b-4 border-b-[#A25F4B]
    //        hover:text-[#744838] hover:border-b-[#744838] hover:cursor-pointer select-none"
    //        >
    //          Read the full Story
    //        </span>
    //      </div>
    //    </div>

    //    <Line>FEATURED MUGS</Line>
    //    <div className="FEATURED-MUGS h-[540px] w-full flex justify-center items-center gap-8">
    //      <div className="basis-1/2 w-full h-full bg-no-repeat bg-cover object-cover  bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg')]"></div>

    //      <div className="basis-1/2 h-full bg-no-repeat bg-cover object-cover bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-02.jpg')]"></div>
    //    </div>
    //    <Line>MORE PRODUCTS</Line>
    //    <ListProduct></ListProduct>
    //    <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
    //    <DetailPage></DetailPage>
    //    <div className="mt-20">
    //      <img
    //        src="https://coffee-style-trungquandev.web.app/img/bg-parallax-01.jpeg"
    //        alt=""
    //      />
    //    </div>
    //    <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
    //    <ListNewsStory></ListNewsStory>

    //    <div className="w-full h-[350px] bg-[#1d1f2e] flex flex-col   justify-start items-center">
    //      <Line margin="my-[50px]">SIGN UP AND GET FREE COFFEE BAGS</Line>
    //      <h1 className="mb-5 text-3xl text-white"> Coffee Updates</h1>
    //      <div className="flex items-center gap-5">
    //        <input
    //          type="text"
    //          placeholder="huytran.itvn@gmail.com"
    //          className=" px-5 py-7 bg-[#1d1f2e] font-semibold border-[1px] border-[#374151] w-[400px] h-[50px]"
    //        />
    //        <Button full="max-w-[200px]">SUBSCRIBE</Button>
    //      </div>
    //    </div>
    //  </main>

    //  <footer className="p-10 pb-32 text-sm w-[85%] mx-auto">
    //    <div className="flex items-start justify-center gap-10">
    //      <div className="flex flex-col gap-3 basis-1/4 Introduc">
    //        <h1 className="mb-5 text-2xl font-bold ">CoffeeStyle.</h1>
    //        <span>Delivering the best coffee life since 1996.</span>
    //        <span>From coffee geeks to the real ones.</span>
    //      </div>

    //      <div className="flex flex-col gap-3 Menu basis-1/4">
    //        <h1 className="mb-5 text-2xl font-bold ">MENU</h1>
    //        <span>Home</span>
    //        <span>Our Products</span>
    //        <span>About</span>
    //        <span>Contact</span>
    //        <span>Styleguide</span>
    //        <span>Trungquandev</span>
    //      </div>
    //      <div className="flex flex-col gap-3 Follow Introduce basis-1/4">
    //        <h1 className="mb-5 text-2xl font-bold ">FOLLLOW US</h1>
    //        <span>Facebook</span>
    //        <span>Instagram</span>
    //        <span>Pinterest</span>
    //        <span>Twitter</span>
    //      </div>
    //      <div className="flex flex-col gap-3 contact basis-1/4">
    //        <h1 className="mb-5 text-2xl font-bold ">CONTACT US</h1>
    //        <span>We are Always Happy to Help</span>
    //        <span>huytran.itvn@gmail.com</span>
    //      </div>
    //    </div>
    //  </footer>
    //</div>

    <div className="wrapper overflow-x-hidden overflow-y-hidden mx-auto 2xl:px-8 ">
      <header className="w-full max-sm:px-4 xl:p-6 md:px-4 mx-auto">
        <nav className="flex flex-row items-center justify-between">
          <div className="relative text-xl font-semibold text-center cursor-pointer logo basis-1/6">
            CoffeeStyle.
          </div>
          <div className="cs-list-menu-item hidden xl:flex">
            {menu.map((item, index) => (
              <span key={index} className="top-menu-item xl:flex">
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 p-4 text-sm font-medium text-center cursor-pointer cart basis-1/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="stroke-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="uppercase">Cart</span>
            <span className="w-6 text-center bg-orange-200 rounded-full">
              7
            </span>
          </div>
          <div className="toggle menu-mobile cursor-pointer sm:block md:block lg:block xl:hidden">
            <button
              onClick={() => setIsActive((active) => !active)}
              className={`p-4 transition-all duration-500 ease-in-out ${
                isActive ? "bg-gray-200" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                isActive ? "max-h-96" : "max-h-0"
              }`}
            >
              <div
                className={`absolute transition-all duration-500 ease-in-out w-full bg-gray-200 left-0 z-50 ${
                  isActive ? "max-h-96" : "hidden"
                }`}
              >
                {menu.map((item, index) => (
                  <span
                    key={index}
                    className="transition-all duration-500 ease-in-out relative w-full flex border-b-2 border-gray-400 border-opacity-80 justify-center py-3 cursor-pointer hover:bg-gray-400 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="w-full max-sm:p-2 md:p-2 xl:p-6 2xl:p-6 mx-auto">
        <div className="relative h-[550px] w-full flex justify-center items-center">
          <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)]"></div>
          <div
            className="object-cover w-full h-full bg-bottom bg-no-repeat bg-cover slide"
            style={{
              backgroundImage: `url('https://coffee-style-trungquandev.web.app/img/slider-bg.jpeg')`,
            }}
          ></div>
          <div className="absolute grid gap-6 text-center text-white top-14">
            <h6 className="text-xl max-sm:text-sm max-md:text-base xl:text-xl 2xl:text-xl">
              BEST PLACE TO BUY COFFEE
            </h6>
            <h1 className="text-5xl 2xl:text-5xl xl:text-5xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl font-bold">
              Coffee Mugs
            </h1>
            <h6 className="text-xl max-sm:text-sm max-md:text-base xl:text-xl 2xl:text-xl">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </h6>
            <div className="flex items-center justify-center">
              <Button>Explore Our Products</Button>
            </div>
          </div>
        </div>
        <Line>OUR COFFEE STORY</Line>
        <div className="xl:flex 2xl:flex max-sm:grid grid-cols-1 xl:items-center xl:justify-center 2xl:items-center 2xl:justify-center gap-8 content max-w-screen-2xl mx-auto">
          <div className="video basis-1/2">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover min-h-[350px]"
            >
              <source
                src="https://coffee-style-trungquandev.web.app/video/coffee-video.mp4"
                frameBorder="0"
              ></source>
            </video>
          </div>
          <div className="pr-10 text-context basis-1/2">
            <h1 className="pr-10 mb-3 text-4xl leading-10 text-left">
              What is your most special coffee?
            </h1>
            <h1 className="mb-4 leading-7 text-left text-gray-500">
              The French Press is a brewing method that comes closest to
              cupping. Cupping is the prescribed method by which coffee should
              be judged. Nothing separates the water from the coffee. To
              properly discover the flavours, it is best to drink the coffee
              this way. Everyone has their favourite brewing method.
            </h1>
            <span className="text-[#A25F4B] font-semibold border-b-4 border-[#A25F4B] hover:text-[#744838] hover:border-b-[#744838] cursor-pointer select-none">
              Read the full Story
            </span>
          </div>
        </div>
        <Line>FEATURED MUGS</Line>
        <div className="FEATURED-MUGS h-[540px] w-full flex justify-center items-center gap-8">
          <div className="basis-1/2 w-full h-full bg-no-repeat bg-cover object-cover bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-01.jpg')]"></div>
          <div className="basis-1/2 h-full bg-no-repeat bg-cover object-cover bg-[url('https://coffee-style-trungquandev.web.app/img/featured-mug-02.jpg')]"></div>
        </div>
        <Line>MORE PRODUCTS</Line>
        <ListProduct></ListProduct>
        <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
        <DetailPage></DetailPage>
        <div className="mt-20">
          <img
            src="https://coffee-style-trungquandev.web.app/img/bg-parallax-01.jpeg"
            alt=""
          />
        </div>
        <Line>BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE</Line>
        <ListNewsStory></ListNewsStory>
        <div className="w-full h-[350px] bg-[#1d1f2e] flex flex-col justify-start items-center">
          <Line margin="my-[50px]">SIGN UP AND GET FREE COFFEE BAGS</Line>
          <h1 className="mb-5 text-3xl text-white">Coffee Updates</h1>
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="huytran.itvn@gmail.com"
              className="px-5 py-7 bg-[#1d1f2e] font-semibold border-[1px] border-[#374151] w-[400px] h-[50px]"
            />
            <Button full="max-w-[200px]">SUBSCRIBE</Button>
          </div>
        </div>
      </main>
      <footer className="p-10 pb-32 text-sm w-[85%] mx-auto">
        <div className="flex flex-wrap items-start justify-center gap-10">
          <div className="flex flex-col gap-3 basis-full sm:basis-1/2 md:basis-1/4">
            <h1 className="mb-5 text-2xl font-bold">CoffeeStyle.</h1>
            <span>Delivering the best coffee life since 1996.</span>
            <span>From coffee geeks to the real ones.</span>
          </div>
          <div className="flex flex-col gap-3 basis-full sm:basis-1/2 md:basis-1/4">
            <h1 className="mb-5 text-2xl font-bold">MENU</h1>
            <span>Home</span>
            <span>Our Products</span>
            <span>About</span>
            <span>Contact</span>
            <span>Styleguide</span>
            <span>Trungquandev</span>
          </div>
          <div className="flex flex-col gap-3 basis-full sm:basis-1/2 md:basis-1/4">
            <h1 className="mb-5 text-2xl font-bold">FOLLOW US</h1>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>Twitter</span>
          </div>
          <div className="flex flex-col gap-3 basis-full sm:basis-1/2 md:basis-1/4">
            <h1 className="mb-5 text-2xl font-bold">CONTACT US</h1>
            <span>We are Always Happy to Help</span>
            <span>huytran.itvn@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
