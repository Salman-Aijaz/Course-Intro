"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import thoughts from "../assets/pngwing.com.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";


const PublicRating = () => {
  const ratings = [
    <FaStar  key={1}/>,
    <FaStar key={2}/>,
    <FaStar key={3}/>,
    <FaStarHalfStroke key={4} />,
    <FaRegStar key={5}/>,
  ];
  const fullRatings = [
    <FaStar key={1}/>,
    <FaStar key={2}/>,
    <FaStar key={3}/>,
    <FaStar key={4}/>,
    <FaStarHalfStroke  key={5}/>,
  ];

  const emptyStars = [
    <FaRegStar  key={1}/>,
    <FaRegStar key={2}/>,
    <FaRegStar key={3}/>,
    <FaRegStar key={4}/>,
    <FaRegStar key={5}/>,
  ];
  
  const reviews = [
    {
      name: "Salman",
      avatarSrc: "https://github.com/shadcn.png",
      date: "9-May-2024",
      rating: ratings,
      text: "This course is very good ",
    },
    {
      name: "Hammad",
      avatarSrc: "https://github.com/shadcn.png",
      date: "5-May-2024",
      rating: fullRatings,
      text: "Really Appreciate it",
    },
    {
      name: "Sufiyan",
      avatarSrc: "https://github.com/shadcn.png",
      date: "9-May-2024",
      rating: ratings,
      text: "Good course but there is more topics to cover",
    },
  ];

  const [showFullName, setShowFullName] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggleNameDisplay = () => {
    setShowFullName(!showFullName);
  };

  const toggleReadDisplay = () => {
    setReadMore(!readMore);
  };

  const getDisplayName = (name: string) => {
    if (showFullName) {
      return name;
    } else {
      return name.length >= 8 ? `${name.slice(0, 8)} ...` : name;
    }
  };

  const getReadMore = (text: string) => {
    if (readMore) {
      return text;
    } else {
      return text.length > 45 ? `${text.slice(0, 45)} ` : text;
    }
  };

  return (
  <>
<div className="container flex justify-center items-center ">
    <div className="  ml-0 mr-0 mt-2 pr-0 pl-0 rounded-xl  sm:ml-0 md:ml-0  lg:ml-0 xl:ml-0 max-w-screen-xl w-full " id="rating">
      
      <h1 className="mt-6 mb-8   font-sans text-4xl   font-bold text-white ">
        Public Review & Rating
      </h1>
      <div className="bg-[rgba(30,41,59,0.5)] py-4 px-6  w-fit ">
        <div className="flex flex-col gap-6 sm:flex-row md:flex-row lg:flex-row">
        <div className="flex flex-col gap-0    sm:flex-col md:flex-row lg:flex-row sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6 ">
          <div className="">
          <p className=" text-[#2cbca5] leading-5 font-sans	  ">
            Average Rating: 4.5 Stars
          </p>
        <p className="  font-sans	 text-white">200 Reviews</p>
          </div>
        </div>
        
          <div className="flex items-center">
            {ratings.map((elem, ind) => (
              <div key={ind} className="text-yellow-300 text-3xl " >{elem}</div>
            ))}
          </div>
          </div>
      </div>

      <>
        {reviews.map(
          (review, index) => (
            // console.log("INDEX",index),
            // console.log(review.text.length),
            (
              <div key={index} className="bg-[rgba(30,41,59,0.5)]  mt-6  gap-4  p-6   w-full  ">
                <div  className="flex flex-col   mt-0 sm:flex-row md:flex-row lg:flex-row gap-[140px] ">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row ">
                      <p
                        className="text-center font-sans w-2 text-white"
                        onClick={toggleNameDisplay}
                      >
                        {" "}
                        {getDisplayName(review.name)}
                      </p>
                    </div>

                    <span className="flex">
                      {review.rating.map((elem, ind) => (
                        <div  key={ind} className="text-white  text-2xl">
                          {elem}
                        </div>
                      ))}
                    </span>
                    <p className="text-white font-sans">{review.date}</p>
                  </div>
                  <div className="flex flex-col gap-3 w-fit  ">
                  
                    <p className={`h-auto ${readMore ? 'max-h-none' : 'h-2'} w-fit text-white  font-sans`}  onClick={toggleReadDisplay}>
                      
                      {getReadMore(review.text)}
                      {review.text.length > 45 && !readMore ?(
                        <span className="cursor-pointer text-blue-500">Read More</span>
                      ):(
                         <span></span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </>

    
      
    </div>
    </div>

  {/*RATING FORM */}

      </>
  );
};

export default PublicRating;
