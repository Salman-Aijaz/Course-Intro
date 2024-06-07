import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";

const HeroSection = () => {
  return (
      <div className="flex flex-col justify-evenly 
      items-center h-full lg:h-screen  lg:flex-row  px-8 lg:px-0 dark:bg-gradient-to-b dark:from-[rgba(24,56,129,1)] dark:to-zinc-950 
       dark:text-zinc-200 font-sans">
        <div className="w-">
          <h1 className="font-bold text-4xl">
            Crypto Trading Fundamental
          </h1>
          <p className="my-4 text-base">Short Course</p>
          <p className="mt-4 text-base lg:w-1/4">
            In this program, you'll work with the Bitcoin and Ethereum
            protocols, build projects for real-world application, and gain the
            essential skills for a career in this dynamic space.
          </p>
          <div className="pb-6">
            <div className="flex gap-4 my-4">
              <IoMdCheckmark className="h-8 dark:text-white"/>
              <p className="text-base dark:text-zinc-200">
                Up to 200 USDT in reward
              </p>
            </div>
            <div className="flex gap-4 my-4">
              <IoMdCheckmark className="h-8 dark:text-white"/>
              <p className="text-base dark:text-zinc-200">
                Earn while you learn
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <IoMdCheckmark className="h-8 dark:text-white"/>
              <p className="text-base dark:text-zinc-200">
                Buy course & get 30% off on first challenge
              </p>
            </div>
          </div>
          <button className="bg-blue-500 text-base text-white px-4 py-2 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* 2nd  */}
          <div className="w-full lg:w-[400px] dark:bg-gradient-to-r bg-gray-50 dark:bg-[rgba(30,41,59,0.5)] border-2 border-[#f0f0f0] rounded-md p-6">
            <div className="flex gap-4">
              <IoIosClock className="w-10 h-20 text-[#191919]"/>
              <div>                          
                <h2 className="mt-4 text-lg md:text-xl font-semibold">
                  Course Duration
                </h2>
                <p className="text-base">6 Hours per Week</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GiAchievement className="w-10 h-20 text-[#191919]"/>
              <div>
                <h2 className="mt-4 text-lg md:text-xl font-semibold">
                  Challenges
                </h2>
                <p className="text-base">Do Challenges</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PiCertificateFill className="w-10 h-20 text-[#191919]"/>
              <div>
                <h2 className="mt-4 text-lg md:text-xl font-semibold">
                  Get Certificate
                </h2>
                <p className="text-base">
                  Hand to Hand Get Certificate
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <GiTwoCoins className="w-10 h-20 text-[#191919]"/>
              <div>
                <h2 className="mt-4 text-lg md:text-xl font-semibold">
                  Course Price
                </h2>
                <p className="text-base">
                  Starting from 10$
                </p>
              </div>
            </div>
          </div>
      </div>
  );
};

export default HeroSection;
