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
      <div  className="justify-center flex ml-auto mr-auto max-w-7xl pl-4 pr-4 md:pl-4 lg:pl-6: xl:pl-6 lg:pr-6 xl:pr-6 sm:pr-4 md:mt-2 mt-2">
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
  
   <div className="flex   gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-[94px] xl:ml-[94px] md:mb-4 lg:mb-4 ">
      <BsFillCheckSquareFill  className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
    
   <div className="flex flex-row  gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-[94px] xl:ml-[94px] md:mb-4 lg:mb-4 ">
      <BsFillCheckSquareFill  className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>

    
   <div className="flex flex-row  gap-[10px] leading-7 text-white mb-10 ml-16 sm:mb-10 sm:ml-4 sm:gap-[10px] md:gap-[10px] lg:gap-0 md:ml-16 lg:ml-[94px] xl:ml-[94px] md:mb-4 lg:mb-4 ">
      <BsFillCheckSquareFill className="w-[100px] h-[30px] mt-[1px] sm:w-[70px]"/>
      <p className="">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
  </div>

</div>


<div className=" pb-4 items-center justify-center flex">


<div className="bg-[rgba(30,41,59,0.5)] p-[30px] rounded-md  mt-4 w-[335px] min-h-auto md:min-h-auto lg:min-h-[368px] xl:min-h-[368px]">
        <h3 className=" text-white text-2xl mb-4 font-bold">
          Skill you will learn
        </h3>
       <div className="flex flex-wrap w-[335px]">
        <span className="bg-white rounded-full px-[16px] py-[8px] mr-[14px] mb-[12px] font-medium text-sm">Crypto Currency</span>
        <span  className="bg-white rounded-full px-[16px] py-[8px] mr-[14px] mb-[12px] font-medium text-sm">Blockchain</span>
        <span  className="bg-white rounded-full px-[16px] py-[8px] mr-[14px] mb-[12px] font-medium text-sm  ">Trading</span>
       </div>
      </div>




</div>
    </>
  );
};

export default Info;
