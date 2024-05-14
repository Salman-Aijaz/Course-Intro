"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import thoughts from "../assets/pngwing.com.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

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
      name: "Muhammad Sufiyan",
      avatarSrc: "https://github.com/shadcn.png",
      date: "9-May-2024",
      rating: ratings,
      text: "Good course but there is more topics to cover sajlkfsjblskfdljhfshfd",
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
    <div className="ml-0 mr-0 mt-2 pr-4 pl-4 rounded-xl w-50 sm:ml-0 md:ml-0 lg:ml-[308px]" id="rating">
      <h1 className="mt-6 mb-8   font-sans text-4xl   font-bold text-white ">
        Public Review & Rating
      </h1>

      <div className="bg-[rgba(30,41,59,0.5)] py-6 px-4 gap-4 sm:px-6 md:px-6 lg:px-6  w-full xl:w-[69%] rounded-md">
        <div className="flex flex-col gap-0 sm:gap-6  md:gap-40 lg:gap-40 sm:flex-row md:flex-row lg:flex-row">
        <div className="flex flex-col gap-0    sm:flex-col md:flex-row lg:flex-row sm:gap-0 md:gap-6 lg:gap-6 xl:gap-6 ">
          <div className="">
          <p className="mb-0    text-[#2cbca5] leading-5 font-sans	 mr-0 sm:mb-1 lg:mb-1 xl:mb-1 ">
            Average Rating: 4.5 Stars
          </p>
        <p className=" mb-2 mt-2 font-sans	 text-white">200 Reviews</p>
          </div>
        </div>
        
          <div className="flex">
            {ratings.map((elem, ind) => (
              <div key={ind} className="text-yellow-300 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl" >{elem}</div>
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
              <div key={index} className="bg-[rgba(30,41,59,0.5)] rounded-md mt-4  gap-4  p-6   w-full  xl:w-[69%]">
                <div  className="flex flex-col gap-0  mt-4 sm:flex-row md:flex-row lg:flex-row sm:gap-6  md:gap-64 lg:gap-64">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row ">
                      <Avatar>
                        <AvatarImage
                          src={review.avatarSrc}
                          alt={`@${review.name}`}
                        />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p
                        className="text-center font-sans w-2 text-white"
                        onClick={toggleNameDisplay}
                      >
                        {" "}
                        {getDisplayName(review.name)}
                      </p>
                    </div>
                    <p className="text-white font-sans">{review.date}</p>
                  </div>
                  <div className="flex flex-col gap-3 w-56  ">
                    <span className="flex">
                      {review.rating.map((elem, ind) => (
                        <div  key={ind} className="text-yellow-300 text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
                          {elem}
                        </div>
                      ))}
                    </span>
                    <p className={`h-auto ${readMore ? 'max-h-none' : 'h-2'} w-52 text-white  font-sans`}  onClick={toggleReadDisplay}>
                      
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

      {/*RATING FORM */}

      <div className="bg-[rgba(30,41,59,0.5)] py-4  pl-6 pr-6 pb-8 pt-8  mt-4 w-full xl:w-[69%] ">
        <h1 className=" text-white  font-sans text-4xl   font-bold   mb-4 ">
          Rate Us
        </h1>

        <p className=" text-gray-500 font-sans text-xl">
          Your Input is super Important in helping us understand your needs
          better, so we can customize our services to suit you perfectly{" "}
        </p>

        <h4 className=" mt-4 text-4xl tracking-tight font-bold text-white" >
          How Would your Rate our course?
        </h4>

        <div className="flex mt-4  gap-[5px] sm:gap-2 md:gap-4 lg:gap-4 xl:gap-4 ">
          {emptyStars.map((elem, ind) => (
            // console.log("INDEX of empty star",ind),
            <div
              key={ind}
              className="text-yellow-200 flex p-2 sm:p-4 md:p-4 lg:p-6 xl:p-6  rounded-full	 border-solid	border-2 border-gray-600 relative hover:bg-gray-500  text-lg md:text-2xl sm:text-xl lg:text-3xl xl:text-3xl"
            >
              {elem}
            </div>
          ))}
        </div>
        <textarea
          name=""
          id=""
          className="mt-4  text-white bg-black w-full rounded-md p-4"
          rows={8}
          cols={4}
          placeholder="Enter Your review here"
        ></textarea>

        <button className="bg-blue-500 h-12 w-full rounded-md	flex items-center justify-center font-sans text-white mb-2 mt-4 ml-0">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PublicRating;
