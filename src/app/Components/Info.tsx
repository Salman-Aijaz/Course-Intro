import Image from "next/image";
import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { BsFillCheckSquareFill } from "react-icons/bs";


const Info = () => {
  return (
    <>
      <div className="justify-center flex ml-auto mr-auto max-w-7xl pl-4 pr-4 md:pl-4 lg:pl-6: xl:pl-6 lg:pr-6 xl:pr-6 sm:pr-4 md:mt-2 mt-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 px-2 bg-white rounded-lg shadow-lg text-slate-500 pt-8 pb-7">
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <IoIosClock style={{width:"40px",height:"32px"}}  />
            </div>
            <p>6 Hours per Week</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <GiAchievement style={{width:"40px",height:"32px"}}/>
            </div>
            <p>Do Challenges</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <PiCertificateFill style={{width:"40px",height:"32px"}}/>
            </div>
            <p>Get Certificate</p>
          </div>
        </div>
      </div>

<div className="pt-12 pb-0 flex justify-center ">
  <div className="max-w-7xl  ml-auto mr-auto pl-2 pr-6 flex flex-col   justify-center md:pl-2 sm:flex-col md:flex md:flex-row lg:flex lg:flex-row lg:pl-6 ">
  
   <div className="flex   gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-[141px] xl:ml-[141px] md:mb-16 lg:mb-32 ">
      <BsFillCheckSquareFill  className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
    
   <div className="flex flex-row  gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-16 xl:ml-16 md:mb-16 lg:mb-32 ">
      <BsFillCheckSquareFill  className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>

    
   <div className="flex flex-row  gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-16 xl:ml-16 md:mb-16 lg:mb-32 ">
      <BsFillCheckSquareFill className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
  </div>

</div>



      <button className="  bg-blue-500  text-xs  text-white px-2 py-2 rounded-md ml-0 lg:ml-10 xl:ml-10 lg:px-4 xl:px-4 lg:text-base">
        Skills You Will Learn
      </button>

      <div className=" border-b-2 border-slate-800 pt-2 pb-6  pl-32 lg:pl-40 xl:pl-40 lg:pt-6 xl:pt-6">
        <div className="flex  gap-2 flex-wrap">
          <div className="flex items-center   bg-slate-700 text-white pt-2 pr-2 rounded-xl pb-2 pl-2 lg:pr-4 xl:pl-4 ">
            <p className="text-xs lg:text-base">Smart Contracts</p>
          </div>
          <div className="flex items-center  bg-slate-700 text-white pt-2 pr-2 rounded-xl pb-2 pl-2  lg:pr-4 xl:pl-4 ">
            <p className="text-xs lg:text-base">Crypto Currency</p>
          </div>
          <div className="flex items-center  bg-slate-700 text-white pt-2 pr-2 rounded-xl pb-2 pl-2 lg:pr-4 xl:pl-4 ">
            <p className="text-xs lg:text-base">Blockchain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
