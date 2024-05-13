import React from "react";
import bitImage from "../assets/andre-francois-mckenzie-iGYiBhdNTpE-unsplash.jpg";
import Image from "next/image";
import { FaStar,FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

// const StarRating =({rating}:{rating:number})=>{
//  const star=[]

//  for (let i = 1; i <= 5; i++) {
//   if(i<=rating){
//   star.push(<Image key={i} src={full_star} alt="full" />)
//   }
//   else if (i - 0.5 === rating) {
//     star.push(<Image key={i} src={half_star} alt="half" />);
//   } else {
//     star.push(<Image key={i} src={empty_star} alt="empty" />);
//   }  
//   return <div className="flex items-center">{star}</div>;
//  }
// }

const HeroSection = () => {


const ratings = [<FaStar key={1} />,<FaStar key={2} />,<FaStar key={3} />,<FaStarHalfStroke key={4}/>,<FaRegStar key={5}/>]
// console.log(ratings)
return (
    <div className="relative flex flex-col justify-center bg-gradient-to-b from-blue-950 to-black sm:flex-col md:flex-row lg:flex-row ">
      <div className="justify-between  pt-24 pb-30 flex flex-col">
        <div className="justify-center gap-4 pr-10 pl-10">
         
          <h1 className="scroll-m-20 font-bold text-2xl   leading-10 text-white	 tracking-tight	mb-2  md:text-2xl md:mb-0 sm:mb-2 sm:text-2xl lg:text-3xl xl:text-3xl">
            Crypto Trading Fundamental
          </h1>
          <p className=" mb-2 text-white md:mb-2 sm:mb-2 lg:mb-6 xl:mb-6">
            Short Course
          </p>

         <div className=" bottom-4 right-4  flex mb-2 md:mb-2 sm:mb-2 lg:mb-6xl:mb-6">
          {ratings.map((elem,ind)=>(
           <div key={ind} className="text-yellow-300 text-xl md:text-2xl sm:text-xl lg:text-3xl xl:text-3xl">
           {elem}
           </div>
          ))}
         </div>

          <p className=" text-sm leading-6 text-white    mb-2 md:mb-3 sm:mb-2 lg:mb-6 xl:mb-6 sm:text-sm lg:text-base xl:text-base">
            In this program, you'll work with the Bitcoin and Ethereum
            protocols, build projects for real-world application, and gain the
            essential skills for a career in this dynamic space.
          </p>
          <button className="  bg-blue-500   text-white px-4 py-2 rounded-md  ">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="flex items-center pt-4 pb-30 pr-10 pl-10 sm:pt-4 md:pt-24 lg:pt-24 xl:pt-24">
        <Image src={bitImage} alt="ok" width={980} height={300}  className=""/>
      </div>  

    </div>
  );
};

export default HeroSection;
