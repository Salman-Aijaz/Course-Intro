import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { GiTwoCoins } from "react-icons/gi";
import Image from "next/image";
import tick from "../../../public/tick-removebg-preview.png";

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

const HeroSection = ({ scrollToCourse }: { scrollToCourse:any }) => {
  return (
    <div className="flex flex-col justify-evenly items-center lg:py-20 lg:flex-row px-4 lg:px-0 dark:bg-gradient-to-b dark:from-[rgba(24,56,129,1)] dark:to-zinc-950">
      <div className="lg:w-1/3 my-8 lg:my-0">
        <h1 className="font-bold text-4xl">
          Crypto <span className="bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent">Trading</span> Fundamental
        </h1>
        <p className="my-4 text-base dark:text-yellow-400 text-blue-500 cursor-pointer" onClick={scrollToCourse}>View Course</p>
        <p className="text-base">
          In this program, you'll work with the Bitcoin and Ethereum protocols,
          build projects for real-world application, and gain the essential
          skills for a career in this dynamic space.
        </p>
        <div className="my-6">
          <div className="flex items-center gap-4">
            <Image src={tick} className="w-4 h-4" alt="pic" />
            <p className="text-base">Up to 200 USDT in reward</p>
          </div>
          <div className="flex items-center gap-4 my-4">
            <Image src={tick} className="w-4 h-4" alt="pic" />
            <p className="text-base">Earn while you learn</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={tick} className="w-4 h-4" alt="pic" />
            <p className="text-base">Buy course & get 30% off on first challenge</p>
          </div>
        </div>
        <button className="bg-blue-500 text-base text-white px-4 py-2 rounded-md">
          Enroll Now
        </button>
      </div>

      <div className="w-full lg:w-96 dark:bg-gradient-to-r bg-gray-50 dark:from-[#172335] dark:to-[#101c36] border rounded-md p-4 flex flex-col gap-8">
        {sections.map((section, index) => (
          <div className="flex gap-2" key={index}>
            <section.icon className="w-8 h-12 text-[#191919] dark:text-[#d8d8d8]" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold">{section.title}</h2>
              <p className="text-base">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
