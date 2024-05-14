  "use client";
  import Image from "next/image";
  import React, { useState } from "react";
  import lessonImage from "../assets/Lesson.png";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { FaBookOpen } from "react-icons/fa6";


  const CourseProgram = () => {
    const [showCourse, setShowCourse] = useState(false);
    const [selectCourseIndex, setSelectCourseIndex] = useState(0);
    const [lessonIndex, setLessonIndex] = useState(0);
    const totalLesson = 6;

    const courses = [
      {
        title: "Getting Started",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Crypto Profit Potential",
            description:
              "In this lesson you are introduced to the Crypto Profit Potential and get an overview of the Crypto Fleet Course",
          },
          {
            chapter: "Chapter 2",
            title: "Intro To CryptoCurrency",
            description:
              "In this lesson you are introduced to Intro of Crypto Currency and get an overview of the Crypto Fleet Course",
          },
          {
            chapter: "Chapter 3",
            title: "Intro To TradingView",
            description:
              "In this lesson you are introduced about what is TradingView and get an overview of the Crypto Fleet Course",
          },
        ],
      },
      {
        title: "Reading Chart",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Chart",
            description: "In this lesson you will learn What is Chart",
          },
        ],
      },
      {
        title: "Market Movement Basic",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Market Movement",
            description: "In this lesson you will learn What is Market Movement",
          },
          {
            chapter: "Chapter 2",
            title: "Types Of Market Movement",
            description:
              "In this lesson you will learn What are the types of Market Movement",
          },
          {
            chapter: "Chapter 3",
            title: "Identify The Market Movement",
            description:
              "In this lesson you will learn how to identify the Market Movement",
          },
        ],
      },
      {
        title: "Understanding Trends",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Example UpTrend",
            description: "In this lesson you will learn What is UpTrend",
          },
          {
            chapter: "Chapter 2",
            title: "Example DownTrend",
            description: "In this lesson you will learn What is DownTrend",
          },
          {
            chapter: "Chapter 3",
            title: "Example Consolidation",
            description:
              "In this lesson you will learn about what is Consolidation",
          },
        ],
      },
      {
        title: "CandleStick Essentials",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "CandleStick",
            description:
              "In this lesson you will learn What is CandleStick and why we use",
          },
          {
            chapter: "Chapter 2",
            title: "CandleStick Types",
            description: "In this lesson you will learn The Types Of CandleStick",
          },
          {
            chapter: "Chapter 3",
            title: "CandleStick Example",
            description:
              "In this lesson you will see The Example Of CandleStick and get to know in which time we Trade",
          },
        ],
      },
      {
        title: "Key Level And Testing",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Major Key Level",
            description: "In this lesson you will learn The Major Key Level",
          },
          {
            chapter: "Chapter 2",
            title: "Key Level",
            description: "In this lesson you will learn Key Level",
          },
          {
            chapter: "Chapter 3",
            title: "Break And Retest",
            description: "In this lesson you will learn Break And Retest",
          },
          {
            chapter: "Chapter 4",
            title: "Rule Of Retest",
            description: "In this lesson you will learn Rule Of Retest",
          },
          {
            chapter: "Chapter 5",
            title: "UpTrend Break And Retest",
            description: "In this lesson you will learn UpTrend Break And Retest",
          },
          {
            chapter: "Chapter 6",
            title: "DownTrend Break And Retest",
            description:
              "In this lesson you will learn DownTrend Break And Retest",
          },
        ],
      },
      {
        title: "Timing Trades",
        lessons: [
          {
            chapter: "Chapter 1",
            title: "Time Frames",
            description:
              "In this lesson you will learn What is TimeFrames and in which time you will do Trade",
          },
          {
            chapter: "Chapter 2",
            title: "Best Time For Trading",
            description:
              "In this lesson you will learn Best Time For Trading and in which time you will do Trade",
          },
        ],
      },
    ];

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      useCSS:true
    };

    const triggerCourse = () => {
      setShowCourse(!showCourse);
    };

    

    return (
      <div id="course" className="border-b-2 border-slate-800 pb-2 container  ">
        <h1 className="mt-6 mb-8 ml-0 leading-7 text-white font-sans text-4xl   font-bold  sm:ml-0 md:ml-0 lg:ml-[320px] ">
          Course In This Program
        </h1>
        {!showCourse &&
          courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="ml-0 mr-0 mt-4 pr-4 pl-0 rounded-xl w-50 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-[308px] xl:mr-[119px]  "
            >
              <div className="bg-[rgba(24,24,27,1)] py-4 px-4 w-full  xl:w-[69%] rounded-md ">
                <p className="mb-1 text-[#2cbca5] leading-5 font-sans	 ">
                  Course {index + 1}: {course.title}
                </p>
                <h1 className=" mb-0 leading-7 text-white font-sans text-3xl   font-bold  mt-5">{course.title}</h1>
              </div>
      
              <div className="flex gap-4 ml-0 mr-0 mt-2 pr-0 pl-0 w-full xl:w-[70%] overflow-x-auto ">
              {course.lessons.map((lesson,lessonIndex) => (
                <div key={lessonIndex} className="flex shrink-0	w-64 h-auto mb-2" >
                  <article
                    className=" bg-[rgba(29,26,39,1)] border border-solid border-gray-300  rounded-md flex flex-col gap-2 h-full  p-4"
                  >
                    <div className="flex items-center gap-2 h-8">
                      <FaBookOpen className="h-8 w-8 flex-shrink-0"/>
                      <p className=" leading-3 font-sans	 text-white">{lesson.chapter}</p>
                    </div>
                    <h4 className="text-white  font-semibold">{lesson.title}</h4>
                   <div className="flex flex-col gap-1">
                    <p className="  font-sans	 text-white">{lesson.description}</p>
                   </div>
                  </article>
              </div>
              ))}
              </div>
            </div>
          ))}

        {showCourse &&
          courses.map((course, index) => (
            <div
              key={index}
              className="ml-0 mr-0 mt-4 pr-4 pl-0 rounded-xl w-50 sm:ml-0 md:ml-0  lg:ml-[320px] "
            >
              <div className="bg-[rgba(24,24,27,1)] py-4 px-4 w-full xl:w-[69%] rounded-md ">
                <p className="mb-1 text-[#2cbca5] leading-5">
                  Course {index + 1}: {course.title}
                </p>
                <h1 className="mb-0 leading-7 text-white font-sans text-3xl   font-bold  mt-5">{course.title}</h1>
              </div>
      
              <div className="flex gap-4 ml-0 mb-2 mt-2 pr-0 pl-0 w-full xl:w-[70%] overflow-x-auto ">
              {course.lessons.map((lesson,lessonIndex) => (
                // console.log("ceck length",lesson.description.length),
                <div key={lessonIndex} className="flex shrink-0	w-64 h-auto mb-2" >
                  <article
                    className=" bg-[rgba(29,26,39,1)] border border-solid border-gray-300  rounded-md flex flex-col gap-2 h-full  p-4"
                  >
                    <div className="flex items-center gap-2 h-8">
                      <FaBookOpen className="h-8 w-8 flex-shrink-0"/>
                      <p className=" leading-3 font-sans	 text-white mb-1">{lesson.chapter}</p>
                    </div>  
                    <h4 className="text-white  font-semibold">{lesson.title}</h4>
                   <div className="flex flex-col gap-1">
                    <p className="font-sans	 text-white">{lesson.description}</p>
                   </div>
                  </article>
              </div>
              ))}
              </div>
            </div>
          ))}

        {!showCourse ? (
          <button
          onClick={triggerCourse}
            className="bg-blue-500 h-12 w-40 rounded-md	flex items-center justify-center font-sans mb-2 mt-4 ml-0 md:ml-0 xl:ml-[320px] lg:ml-0 text-white"
          >
            Show More
          </button>
        ):(
          <button
          onClick={triggerCourse}
            className="bg-blue-500 h-12 w-40 rounded-md	flex items-center justify-center font-sans mb-2 mt-4 ml-0 md:ml-0  lg:ml-0 xl:ml-[320px] text-white"
          >
            Show Less
          </button>
        )}
      </div>
    );
  };

  export default CourseProgram;
