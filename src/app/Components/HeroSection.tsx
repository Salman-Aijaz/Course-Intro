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
    <div className=" flex flex-col max-lg:items-center max-sm:text-center lg:justify-center w-full bg-gradient-to-b  from-[rgba(24,56,129,1)] to-black sm:flex-col md:flex-row lg:flex-row  lg:py-20">
        <div className="py-20 px-10  lg:pb-0">
          <h1 className="font-bold font-sans text-4xl mt-0  xl:mt-20 text-white">
            Crypto Trading Fundamental
          </h1>
          <p className=" mt-2 mb-2 font-sans text-base	 text-white md:mb-2 sm:mb-2 lg:mb-6 xl:mb-6">
            Short Course
          </p>

         <div className=" bottom-4 right-4  flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start mb-2 md:mb-2 sm:mb-2 lg:mb-6">
          {ratings.map((elem,ind)=>(
           <div key={ind} className="text-yellow-300 text-xl md:text-2xl sm:text-xl lg:text-3xl xl:text-3xl">
           {elem}
           </div>
          ))}
         </div>

          <p className=" mt-2 mb-2 font-sans text-base	 text-white md:mb-2 sm:mb-2 lg:mb-6 xl:mb-6">
            In this program, you'll work with the Bitcoin and Ethereum
            protocols, build projects for real-world application, and gain the
            essential skills for a career in this dynamic space.
          </p>
          <button className="  bg-blue-500  font-sans text-base text-white px-4 py-2 rounded-md  ">
            Enroll Now
          </button>
        </div>
      

      <div className="flex flex-col   px-10 py-0 lg:py-20 xl:py-20 h-full ">
        <Image src={bitImage} alt="ok" width={900} height={100}  className=""/>
    
      </div>  

    </div>
  );
};

export default HeroSection;
