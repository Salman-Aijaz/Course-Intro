
"use client";
import Image from "next/image";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBookOpen } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

interface ReadMoreState {
  [courseIndex: number]: {
    [lessonIndex: number]: boolean;
  };
}


const CourseProgram = () => {
  const [showCourse, setShowCourse] = useState(false);
  const [readMore, setReadMore] = useState<ReadMoreState>({});
  const [showFullName, setShowFullName] = useState<ReadMoreState>({});

  
  

  
  const toggleReadDisplay = (courseIndex: number, lessonIndex: number) => {
    setReadMore((prevStates) => ({
      ...prevStates,
      [courseIndex]: {
        ...prevStates[courseIndex],
        [lessonIndex]: !prevStates[courseIndex]?.[lessonIndex],
      },
    }));
  };


  const getReadMore = (text: string, courseIndex: number, lessonIndex: number) => {
    if (readMore[courseIndex]?.[lessonIndex]) {
      return text;
    } else {
      return text.length > 111 ? `${text.slice(0, 111)} ` : text;
    }
  };

  const toggleNameDisplay = (courseIndex:number,lessonIndex:number) => {
    setShowFullName((prevState)=>({
      ...prevState,
      [courseIndex]:{
        ...prevState[courseIndex],
        [lessonIndex]:!prevState[courseIndex]?.[lessonIndex],
      },
    }))
  };

  const getDisplayName = (title: string,courseIndex:number,lessonIndex:number) => {
    if (showFullName[courseIndex]?.[lessonIndex]) {
      return title;
    } else {
      return title.length >= 30 ? `${title.slice(0, 30)} ` : title;
    }
  };

  const courses = [
    {
      title: "Getting Started",
      time: "10 Minute",
      lessons: [
        {
          chapter: "Chapter 1",
          title: "Crypto Profit Potential",
          description: "In this lesson you are introduced to the Crypto Profit Potential and get an overview of the Crypto Fleet Course",
        },
        {
          chapter: "Chapter 2",
          title: "Intro To CryptoCurrency",
          description: "In this lesson you are introduced to Intro of Crypto Currency and get an overview of the Crypto Fleet Course",
        },
        {
          chapter: "Chapter 3",
          title: "Intro To TradingView",
          description: "In this lesson you are introduced about what is TradingView ",
        },
      ],
    },
    {
      title: "Reading Chart",
      time: "10 minute",
      lessons: [
        {
          chapter: "Chapter 1",
          title: "Chart Fundamental",
          description: "In this lesson you are introduced to the Chart in Trading and get an overview of the Crypto Fleet Course",
        },
      ],
    },
    {
      title: "Market Movement Basic",
      time: "20 Minute",
      lessons: [
        {
          chapter: "Chapter 1",
          title: "Market Movement",
          description: "In this lesson you will learn What is Market Movement",
        },
        {
          chapter: "Chapter 2",
          title: "Types Of Market Movement",
          description: "In this lesson you will learn What are the types of Market Movement",
        },
        {
          chapter: "Chapter 3",
          title: "Identify The Market Movement",
          description: "In this lesson you will learn how to identify the Market Movement",
        },
      ],
    },
    {
      title: "Understanding Trends",
      time: "20 Minute",
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
          description: "In this lesson you will learn about what is Consolidation",
        },
      ],
    },
    {
      title: "CandleStick Essentials",
      time: "20 Minute",
      lessons: [
        {
          chapter: "Chapter 1",
          title: "CandleStick",
          description: "In this lesson you will learn What is CandleStick and why we use",
        },
        {
          chapter: "Chapter 2",
          title: "CandleStick Types",
          description: "In this lesson you will learn The Types Of CandleStick",
        },
        {
          chapter: "Chapter 3",
          title: "CandleStick Example",
          description: "In this lesson you will see The Example Of CandleStick and get to know in which time we Trade",
        },
      ],
    },
    {
      title: "Key Level And Testing",
      time: "1 Hour",
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
          description: "In this lesson you will learn DownTrend Break And Retest",
        },
      ],
    },
    {
      title: "Timing Trades",
      time: "10 Minute",
      lessons: [
        {
          chapter: "Chapter 1",
          title: "Time Frames",
          description: "In this lesson you will learn What is TimeFrames and in which time you will do Trade",
        },
        {
          chapter: "Chapter 2",
          title: "Best Time For Trading",
          description: "In this lesson you will learn Best Time For Trading and in which time you will do Trade",
        },
      ],
    },
  ];

  const triggerCourse = () => {
    setShowCourse(!showCourse);
  };

  const displayedCourses = showCourse ? courses : courses.slice(0, 3);

  return (
    <div className="container flex justify-center items-center ">
      <div id="course" className="max-w-screen-xl w-full ">
        <h1 className="mt-6 mb-8  leading-7 text-white font-sans text-4xl font-bold ">
          Course In This Program
        </h1>

        {displayedCourses.map((course, courseIndex) => (
          <div
            key={courseIndex}
            className="ml-0 mr-0 mt-10 pr-4 pl-0 rounded-xl w-50"
          >
            <div className="bg-[rgba(30,31,35,1)] py-4 px-6 w-full rounded-lg">
              <p className="mb-2 text-[#2cbca5] leading-5 font-sans">
                Course {courseIndex + 1}: {course.time}
              </p>
              <h1 className="mb-2 leading-7 text-white font-sans text-3xl font-bold mt-5">
                {course.title}
              </h1>
            </div>

            <div className="flex gap-4 ml-0 mr-0 mt-10 pr-0 pl-0 w-full   overflow-x-auto">
              {course.lessons.map((lesson, lessonIndex) => (
                <div className="flex-shrink-0  w-64 h-[220px] mb-2">
                <article
                  key={lessonIndex}
                  className=" bg-[rgba(29,26,39,1)] border-none rounded-md flex flex-col gap-2 h-full p-4"
                >
                    <h4
                      className="text-white h-12 text-xl  font-semibold font-sans mt-4"
                      onClick={ ()=>toggleNameDisplay(courseIndex,lessonIndex)}
                    >
                      {getDisplayName(lesson.title,courseIndex,lessonIndex)}
                      {
                        lesson.title.length>30 && 
                        !showFullName[courseIndex]?.[lessonIndex] ? (
                          <span className="cursor-pointer text-white">
                            ...
                          </span>
                        ) : (
                          <span></span>
                        )
                      }
                    </h4>
                    <div className="flex flex-col gap-1">
                      <p
                        className="font-sans text-gray-500 text-sm md:text-base mt-2 pt-2"
                        onClick={() => toggleReadDisplay(courseIndex, lessonIndex)}
                      >
                        {getReadMore(lesson.description, courseIndex, lessonIndex)}
                        {lesson.description.length > 111 &&
                        !readMore[courseIndex]?.[lessonIndex] ? (
                          <span className="cursor-pointer text-blue-500">
                            Read More
                          </span>
                        ) : (
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

        <button
          onClick={triggerCourse}
          className="bg-blue-500 h-12 w-40 rounded-md flex items-center justify-center font-sans mb-2 mt-4 text-white"
        >
          {showCourse ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default CourseProgram;
