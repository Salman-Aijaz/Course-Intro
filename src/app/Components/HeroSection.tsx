import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { GiTwoCoins } from "react-icons/gi";
import { IoMdCheckmark } from "react-icons/io";

const sections = [
  {
    icon: IoIosClock,
    title: "Course Duration",
    content: "6 Hours per Week",
  },
  {
    icon: GiAchievement,
    title: "Challenges",
    content: "Do Challenges",
  },
  {
    icon: PiCertificateFill,
    title: "Get Certificate",
    content: "Hand to Hand Get Certificate",
  },
  {
    icon: GiTwoCoins,
    title: "Course Price",
    content: "Starting from 10$",
  },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-evenly items-center lg:py-20 
    lg:flex-row px-8 lg:px-0 
    dark:bg-gradient-to-b dark:from-[rgba(24,56,129,1)] dark:to-zinc-950">
      <div className="lg:w-1/2 my-8 lg:my-0">
        <h1 className="font-bold text-4xl">Crypto Trading Fundamental</h1>
        <p className="my-4 text-base">Short Course</p>
        <p className="text-base">
          In this program, you'll work with the Bitcoin and Ethereum protocols,
          build projects for real-world application, and gain the essential
          skills for a career in this dynamic space.
        </p>
        <div className="my-6">
          <div className="flex gap-4">
            <IoMdCheckmark className="h-6"/>
            <p className="text-base">Up to 200 USDT in reward</p>
          </div>
          <div className="flex gap-4 my-4">
            <IoMdCheckmark className="h-6"/>
            <p className="text-base">Earn while you learn</p>
          </div>
          <div className="flex gap-4">
            <IoMdCheckmark className="h-6"/>
            <p className="text-base">
              Buy course & get 30% off on first challenge
            </p>
          </div>
        </div>
        <button className="bg-blue-500 text-base text-white px-4 py-2 rounded-md">
          Enroll Now
        </button>
      </div>

      {/* 2nd  */}
      <div className="w-full lg:w-96 dark:bg-gradient-to-r bg-gray-50 dark:from-[#274060] dark:to-[#1B2845] 
      border-2 border-[#f0f0f0] rounded-md p-6 grid gap-8">
        {sections.map((section, index) => (
          <div className="flex gap-4" key={index}>
            <section.icon className="w-12 h-12 text-[#191919]"/>
            <span>
              <h2 className="text-lg md:text-xl font-semibold">
                {section.title}
              </h2>
              <p className="text-base">{section.content}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
