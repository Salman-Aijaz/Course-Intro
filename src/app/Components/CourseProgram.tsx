"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { GoStar } from "react-icons/go";

const courses = [
  {
    title: "Getting Started",
    lectures: "3 lectures",
    time: "10 Minute",
    lessons: [
      { topic: "Crypto Profit Potential" },
      { topic: "Intro To CryptoCurrency" },
      { topic: "Intro To TradingView" },
    ],
  },
  {
    title: "Reading Chart",
    time: "10 Minute",
    lectures: "1 lecture",
    lessons: [{ topic: "Chart Fundamental" }],
  },
  {
    title: "Market Movement Basic",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Market Movement" },
      { topic: "Types Of Market Movement" },
      { topic: "Identify The Market Movement" },
    ],
  },
  {
    title: "Understanding Trends",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Example UpTrend" },
      { topic: "Example DownTrend" },
      { topic: "Example Consolidation" },
    ],
  },
  {
    title: "CandleStick Essentials",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "CandleStick" },
      { topic: "CandleStick Types" },
      { topic: "CandleStick Example" },
    ],
  },
  {
    title: "Key Level And Testing",
    time: "1 Hour",
    lectures: "6 lectures",
    lessons: [
      { topic: "Major Key Level" },
      { topic: "Key Level" },
      { topic: "Break And Retest" },
      { topic: "Rule Of Retest" },
      { topic: "UpTrend Break And Retest" },
      { topic: "DownTrend Break And Retest" },
    ],
  },
  {
    title: "Timing Trades",
    time: "10 Minute",
    lectures: "2 lectures",
    lessons: [
      { topic: "Time Frames" },
      { topic: "Best Time For Trading" },
    ],
  },
];

const CourseProgram = () => {
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>(new Array(courses.length).fill(false));

  const toggleCourse = (index: number) => {
    setAccordionOpen((previous) =>
      previous.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="container mx-auto pt-20 pb-4 px-4 md:px-10">
      <div className="flex flex-col border-2 border-solid rounded-lg pt-2 pb-4 px-2 md:px-8">
        <div className="flex items-center mb-4">
          <span className="w-12 md:w-16 border-solid border-2 border-gray-500 rounded-md px-2 py-3 text-white">
            <GoStar className="w-8 h-5 md:w-10 md:h-7" />
          </span>
          <div className="ml-2 md:ml-4">
            <h1 className="text-white text-lg md:text-xl">COURSE OVERVIEW</h1>
            <div className="flex flex-wrap text-gray-700">
              <p className="px-1 md:px-2">9 Sections</p>
              <p className="px-1 md:px-2">•</p>
              <p className="px-1 md:px-2">41 Lectures</p>
              <p className="px-1 md:px-2">•</p>
              <p className="px-1 md:px-2">14h 53min Total Length</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-2 border-solid rounded-lg py-2 px-2 md:px-8">
          {courses.map((course, index) => (
            <>
              <button 
              key={index}
                className="group flex justify-between items-start py-2 px-2 pl-3 my-1 dark:hover:bg-zinc-900 hover:bg-zinc-900"
                onClick={() => toggleCourse(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex-1">
                    <h3 className="text-white text-left text-xs md:text-base">{course.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-white text-xs md:text-sm ml-4">{course.lectures}</h3>
                    <p className="px-2 text-gray-500">•</p>
                    <p className="text-white text-xs md:text-sm">{course.time}</p>
                  </div>
                  <div className="ml-2 flex items-center justify-center">
                    <IoIosArrowDown
                      className={`text-blue-200 transition-transform ${
                        accordionOpen[index] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              <div
                className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out text-slate-700 text-sm ${
                  accordionOpen[index] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-3 overflow-hidden">
                  {course.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="w-full flex mb-2">
                      <div className="flex flex-1 items-center justify-start gap-2 md:gap-4">
                        <FiVideo className="text-white text-xs md:text-base" />
                        <p className="text-white text-xs md:text-base">{lesson.topic}</p>
                      </div>
                      <div className="text-white text-xs md:text-sm">{course.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
