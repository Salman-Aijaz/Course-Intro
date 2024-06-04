import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="dark:bg-gradient-to-b bg-white dark:from-[rgba(24,56,129,1)] dark:to-zinc-950 font-sans">
      <div className="container flex flex-col px-4 md:px-10 justify-between lg:flex-row lg:pt-20 lg:pb-32">
        <div className="pt-10 xl:pr-16">
          <h1 className="font-bold text-4xl xl:mt-4 dark:text-zinc-200">
            Crypto Trading Fundamental
          </h1>
          <p className="mt-4 mb-4 text-base dark:text-zinc-200">Short Course</p>
          <p className="mt-4 mb-4 text-base dark:text-zinc-200 lg:w-[550px]">
            In this program, you'll work with the Bitcoin and Ethereum
            protocols, build projects for real-world application, and gain the
            essential skills for a career in this dynamic space.
          </p>
          <div className="pb-6 gap-3">
            <div className="flex gap-4 mt-4 mb-4">
              <IoMdCheckmark className="h-[30px] dark:text-white" />
              <p className="gap-3 text-base dark:text-zinc-200">
                Up to 200 USDT in reward
              </p>
            </div>
            <div className="flex gap-4 mt-4 mb-4">
              <IoMdCheckmark className="h-[30px] dark:text-white" />
              <p className="gap-3 text-base dark:text-zinc-200">
                Earn while you learn
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <IoMdCheckmark className="h-[30px] dark:text-white" />
              <p className="gap-3 text-base dark:text-zinc-200">
                Buy course & get 30% off on first challenge
              </p>
            </div>
          </div>
          <button className="bg-blue-500 font-sans text-base text-white px-4 py-2 rounded-md">
            Enroll Now
          </button>
        </div>

        {/* 2nd  */}
        <div className="flex pt-10">
          <div className="flex flex-col gap-4 w-full lg:w-[400px] bg-gradient-to-r bg-gray-50 dark:from-[#121E3C] dark:to-[#161E38] border-2 border-[#f0f0f0] rounded-md py-8 px-6">
            <div className="flex gap-4">
              <IoIosClock className="w-10 h-[76px] dark:text-zinc-200 text-[#191919]" />
              <div className="flex flex-col">
                <h2 className="mt-4 mb-1 dark:text-zinc-200 text-lg md:text-xl font-semibold">
                  Course Duration
                </h2>
                <p className="dark:text-zinc-200 text-base">6 Hours per Week</p>
              </div>
            </div>
            <div className="flex gap-4">
              <GiAchievement className="w-10 h-[76px] dark:text-zinc-200 text-[#191919]"/>
              <div className="flex flex-col">
                <h2 className="mt-4 mb-1 dark:text-zinc-200 text-lg md:text-xl font-semibold">
                  Challenges
                </h2>
                <p className="dark:text-zinc-200 text-base">Do Challenges</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PiCertificateFill className="w-10 h-[76px] dark:text-zinc-200 text-[#191919]"/>
              <div className="flex flex-col">
                <h2 className="mt-4 mb-1 dark:text-zinc-200 text-lg md:text-xl font-semibold">
                  Get Certificate
                </h2>
                <p className="dark:text-zinc-200 text-base">
                  Hand to Hand Get Certificate
                </p>
              </div>
            </div>
            <div className="flex font-sans gap-4">
              <GiTwoCoins className="w-10 h-[76px] dark:text-zinc-200 text-[#191919]"/>
              <div className="flex flex-col">
                <h2 className="mt-4 mb-1 dark:text-zinc-200 text-lg md:text-xl font-semibold">
                  Course Price
                </h2>
                <p className="dark:text-zinc-200 text-base">
                  Starting from 10$
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
