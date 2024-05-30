import React from "react";
import bitImage from "../assets/andre-francois-mckenzie-iGYiBhdNTpE-unsplash.jpg";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[rgba(24,56,129,1)] to-zinc-950 ">
    <div className="   container flex flex-col   px-4 md:px-10 justify-between w-full    sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:pt-20 lg:pb-32">
      <div className="pt-10 pb-0 pr-0 lg:pr-0 md:pr-0 xl:pr-16">
        {/* <h2 className="font-bold text-sm text-yellow-500 uppercase mt-2">Starting from 10$</h2> */}
        <h1 className="font-bold font-sans text-4xl mt-0 xl:mt-4 text-white">Crypto Trading Fundamental</h1>
        <p className="mt-4 mb-4 font-sans text-base text-white">Short Course</p>
        <p className="mt-4 mb-4 font-sans text-base text-white sm:w-[550px]">
          In this program, you'll work with the Bitcoin and Ethereum protocols, build projects for real-world application, and gain the essential skills for a career in this dynamic space.
        </p>
        <div className="pb-6 gap-3">
          <div className="flex gap-4 mt-4 mb-4">
            <IoMdCheckmark className="h-[30px] text-white flex items-center" />
            <p className="flex items-center gap-3 text-base text-white">Up to 200 USDT in reward</p>
          </div>
          <div className="flex gap-4 mt-4 mb-4">
            <IoMdCheckmark className="h-[30px] text-white flex items-center" />
            <p className="flex items-center gap-3 text-base text-white">Earn while you learn</p>
          </div>
          <div className="flex gap-4 mt-4">
            <IoMdCheckmark className="h-[30px] text-white flex items-center" />
            <p className="flex items-center gap-3 text-base text-white">Buy course & get 30% off on first challenge</p>
          </div>
        </div>
        <button className="bg-blue-500 font-sans text-base text-white px-4 py-2 rounded-md">Enroll Now</button>
      </div>

      <div className="flex flex-col pl-0 py-0 pt-10 lg:pl-0 md:pl-0 lg:pt-10 md:pt-10 sm:pt-10 sm:pl-0 h-full">

{/* tick  */}
        <div className="flex flex-col gap-4 w-full md:w-full lg:w-[400px]  bg-gradient-to-r  from-[#121E3C] to-[#161E38] border-2 py-8 px-6 border-gray-500">
          <div className="flex gap-4 ">
            <IoIosClock style={{ width: "40px", height: "76px", color: "white" }} />
            <div className="flex flex-col">
              <h2 className="font-sans mt-4 mb-1	 text-white text-lg md:text-xl font-semibold  ">Course Duration</h2>
              <p className="font-sans text-white   text-base">6 Hours per Week</p>
            </div>
          </div>
          <div className="flex gap-4">
            <GiAchievement style={{ width: "40px", height: "76px", color: "white" }} />
            <div className="flex flex-col">
              <h2 className="font-sans mt-4 mb-1	 text-white text-lg md:text-xl font-semibold  ">Challenges</h2>
              <p className="font-sans text-white text-base">Do Challenges</p>
            </div>
          </div>
          <div className="flex gap-4">
            <PiCertificateFill style={{ width: "40px", height: "76px", color: "white" }} />
            <div className="flex flex-col">
              <h2 className="font-sans mt-4 mb-1	 text-white text-lg md:text-xl font-semibold  ">Get Certificate</h2>
              <p className="font-sans text-white text-base">Hand to Hand Get Certificate</p>
            </div>
          </div>
          <div className="flex gap-4">
            <GiTwoCoins style={{ width: "40px", height: "76px", color: "white" }} />
            <div className="flex flex-col">
              <h2 className="font-sans mt-4 mb-1	 text-white text-lg md:text-xl font-semibold  ">Course Price</h2>
              <p className="font-sans text-white text-base">Starting from 10$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
