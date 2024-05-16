"use client";
import Image from "next/image";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBookOpen } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";


const CourseProgram = () => {
  const [showCourse, setShowCourse] = useState(false);
  const [selectCourseIndex, setSelectCourseIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const totalLesson = 6;

  

  const toggleReadDisplay = () => {
    setReadMore(!readMore);
    console.log("READ MORE ",readMore)
  };

  const getReadMore = (text: string) => {
    if (readMore) {
      return text;
    } else {
      return text.length > 45 ? `${text.slice(0, 111)} ` : text;
    }
  };


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
          description:
            "In this lesson you are introduced to the Chart in Trading and get an overview of the Crypto Fleet Course",
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

  const triggerCourse = () => {
    setShowCourse(!showCourse);
  };

  
  // {getReadMore(review.text)}
  // {review.text.length > 45 && !readMore ?(
  //   <span className="cursor-pointer text-blue-500">Read More</span>
  // ):(
  //    <span></span>
  // )}

  return (
    <div className="container flex justify-center items-center ">
      <div id="course" className="max-w-screen-xl w-full ">
        <h1 className="mt-6 mb-8 ml-0 leading-7 text-white font-sans text-4xl   font-bold  sm:ml-0 md:ml-0 lg:ml-0 ">
          Course In This Program
        </h1>
        {!showCourse &&
          courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="ml-0 mr-0 mt-4 pr-4 pl-0 rounded-xl w-50 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 "
            >
              <div className="bg-[rgba(30,31,35,1)] py-4 px-4 w-full   rounded-md ">
                <p className="mb-1 text-[#2cbca5] leading-5 font-sans	 ">
                  Course {index + 1}: {course.title}
                </p>
                <h1 className=" mb-0 leading-7 text-white font-sans text-3xl   font-bold  mt-5">
                  {course.title}
                </h1>
              </div>

              <div className="flex gap-4 ml-0 mr-0 mt-2 pr-0 pl-0 w-full h-full overflow-x-auto ">
                {course.lessons.map(
                  (lesson, lessonIndex) => (
                    console.log(lesson.description.length),
                    (
                      <div
                        key={lessonIndex}
                        className="flex shrink-0	w-64 h-auto mb-2"
                      >
                        <article className=" bg-[rgba(17,24,39,1)] border-none  rounded-md flex flex-col gap-2 h-full  p-4">
                          <div className="flex items-center gap-2 h-8">
                            <FiBookOpen className="h-[32px] w-[32px] flex-shrink-0" />
                            <h1 className=" text-base	 text-white">
                              {lesson.chapter}
                            </h1>
                          </div>
                          <h4 className="text-white  text-lg md:text-xl font-semibold  font-sans mt-4">
                            {lesson.title}
                          </h4>
                          <div className="flex flex-col gap-1">
                            <p className="  font-sans	 text-gray-500 text-sm md:text-base "  onClick={toggleReadDisplay}> 
                      {getReadMore(lesson.description)}
                      {lesson.description.length > 111 && !readMore ?(
                        <span className="cursor-pointer text-blue-500">Read More</span>
                      ):(
                         <span></span>
                      )}
                            </p>
                          </div>
                        </article>
                      </div>
                    )
                  )
                )}
              </div>
            </div>
          ))}

        {showCourse &&
          courses.map((course, index) => (
            <div
              key={index}
              className="ml-0 mr-0 mt-6 pr-4 pl-0 rounded-xl w-50 sm:ml-0 md:ml-0  lg:ml-0 xl:ml-0 "
            >
              <div className="bg-zinc-900 py-4 px-4 w-full rounded-md ">
                <p className="mb-1 text-[#2cbca5] leading-5">
                  Course {index + 1}: {course.title}
                </p>
                <h1 className="mb-0 leading-7 text-white font-sans text-3xl   font-bold  mt-5">
                  {course.title}
                </h1>
              </div>

              <div className="flex gap-4 ml-0 mb-2 mt-2 pr-0 pl-0 w-full  overflow-x-auto ">
                {course.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex shrink-0	w-64 h-[222px] mb-2"
                  >
                    <article className=" bg-[rgba(17,24,39,1)] border-none  rounded-md flex flex-col gap-2 h-full  p-4">
                      <div className="flex items-center gap-2 h-8">
                        <FiBookOpen className=" h-[32px] w-[32px] flex-shrink-0" />
                        <h1 className="text-base	 text-white">
                          {lesson.chapter}
                        </h1>
                      </div>
                      <h4 className="text-white  text-lg md:text-xl font-semibold  font-sans mt-4">
                        {lesson.title}
                      </h4>
                      <div className="flex flex-col gap-1">
                      <p className=" font-sans	 text-gray-500 text-sm md:text-base "  onClick={toggleReadDisplay}> 
                      {getReadMore(lesson.description)}
                      {lesson.description.length > 111 && !readMore ?(
                        <span className="cursor-pointer text-blue-500">Read More</span>
                      ):(
                         <span></span>
                      )}
                            </p>
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
            className="bg-blue-500 h-12 w-40 rounded-md	flex items-center justify-center font-sans mb-2 mt-4  text-white"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={triggerCourse}
            className="bg-blue-500 h-12 w-40 rounded-md	flex items-center justify-center font-sans mb-2 mt-4  text-white"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseProgram;
