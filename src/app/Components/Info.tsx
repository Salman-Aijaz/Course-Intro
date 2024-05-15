import Image from "next/image";
import React from "react";
import { IoIosClock } from "react-icons/io";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";



const Info = () => {
  return (
    <>
      <div  className="justify-center flex  max-w-7xl container  md:mt-2 mt-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 px-2 bg-[#ffffff1b] rounded-lg shadow-lg text-slate-500 pt-8 pb-7">
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <IoIosClock style={{width:"40px",height:"32px",color:"white"}}  />
            </div>
            <p className="font-sans	 text-white">6 Hours per Week</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <GiAchievement style={{width:"40px",height:"32px",color:"white"}}/>
            </div>
            <p className="font-sans	 text-white">Do Challenges</p>
          </div>
          <div className="flex flex-col items-center justify-center mx-4">
            <div>
              <PiCertificateFill style={{width:"40px",height:"32px",color:"white"}}/>
            </div>
            <p className="font-sans	 text-white">Get Certificate</p>
          </div>
        </div>
      </div>

<div className="pt-12 pb-0 flex justify-center container">
  <div className="max-w-7xl mb-[30px] ml-auto mr-auto pl-0 pr-6 flex flex-col   justify-center  sm:flex-col  md:flex-row  lg:flex-row  ">
  
   <div className="flex   gap-[2px] leading-7 text-white mb-10 ml-0 sm:mb-10 sm:ml-4  md:ml-16 lg:ml-[94px] xl:ml-0 md:mb-4 lg:mb-4 ">
      <IoCheckmarkCircleOutline  className="w-[100px] h-[30px]  sm:w-[70px]"/>
      <p className="font-sans	 text-white">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
    
   <div className="flex flex-row  gap-[2px] leading-7 text-white mb-10 ml-0 sm:mb-10 sm:ml-4  md:ml-16 lg:ml-[46px] xl:ml-[46px] md:mb-4 lg:mb-4 ">
      <IoCheckmarkCircleOutline  className="w-[100px] h-[30px]  sm:w-[70px]"/>
      <p className="font-sans	 text-white">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>

    
   <div className="flex flex-row  gap-[2px] leading-7 text-white mb-10 ml-0 sm:mb-10 sm:ml-4  md:ml-16 lg:ml-[94px] xl:ml-[94px] md:mb-4 lg:mb-4 ">
      <IoCheckmarkCircleOutline className="w-[100px] h-[30px]  sm:w-[70px]"/>
      <p className="font-sans	 text-white">Learn Crypto Trading and do challenges every day to upgrade your skill</p>
    </div>
  </div>

</div>

  <div className="pt-12 pb-4 flex flex-wrap justify-center container text-center">
  <h2 className="font-sans text-white text-base text-center mb-0 pt-2 mr-[6px]" > Skills You will Learn: </h2>  
  <span className="border-white border-[3px] text-white rounded-sm px-[16px] md:px-[16px] py-[8px] mr-[14px] mb-[12px] text-sm md:text-base font-sans ">Crypto Currency</span>
  <span  className="border-white border-[3px] text-white rounded-sm px-[16px] py-[8px] mr-[14px] mb-[12px] text-sm md:text-base font-sans">Blockchain</span>
  <span  className="border-white border-[3px] text-white rounded-sm px-[16px] py-[8px] mr-[14px] mb-[12px] text-sm md:text-base font-sans">Trading</span>
                
  </div>

    </>
  );
};

export default Info;
