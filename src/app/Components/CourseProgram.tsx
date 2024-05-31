"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { GoStar } from "react-icons/go";
import { GrCircleQuestion } from "react-icons/gr";

const courses = [
  {
    title: "Getting Started",
    lectures: "3 lectures",
    time: "10 Minute",
    lessons: [
      { topic: "Crypto Profit Potential", topicIcon: <FiVideo /> },
      { topic: "Intro To CryptoCurrency", topicIcon: <FiVideo /> },
      { topic: "Intro To TradingView", topicIcon: <FiVideo /> },
    ],
  },
  {
    title: "Reading Chart",
    time: "10 Minute",
    lectures: "1 lecture",
    lessons: [
      { topic: "Chart Fundamental", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
    ],
  },
  {
    title: "Market Movement Basic",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Market Movement", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Types Of Market Movement", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Identify The Market Movement", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
    ],
  },
  {
    title: "Understanding Trends",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Example UpTrend", topicIcon: <FiVideo /> },
      { topic: "Example DownTrend", topicIcon: <FiVideo /> },
      { topic: "Example Consolidation", topicIcon: <FiVideo /> },
    ],
  },
  {
    title: "CandleStick Essentials",
    time: "20 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "CandleStick", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "CandleStick Types", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "CandleStick Example", topicIcon: <FiVideo /> },
    ],
  },
  {
    title: "Key Level And Testing",
    time: "1 Hour",
    lectures: "6 lectures",
    lessons: [
      { topic: "Major Key Level", topicIcon: <FiVideo /> },
      { topic: "Key Level", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Break And Retest", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Rule Of Retest", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "UpTrend Break And Retest", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "DownTrend Break And Retest", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
    ],
  },
  {
    title: "Timing Trades",
    time: "10 Minute",
    lectures: "2 lectures",
    lessons: [
      { topic: "Time Frames", topicIcon: <FiVideo /> },
      { topic: "Best Time For Trading", topicIcon: <FiVideo /> },
    ],
  },
  {
    title: "Patterns in Market Analysis",
    time: "10 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Double Top Pattern", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Double Bottom Pattern", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Head and Shoulder Pattern", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
    ],
  },
  {
    title: "Channel In Market Analysis",
    time: "10 Minute",
    lectures: "3 lectures",
    lessons: [
      { topic: "Bullish Channel", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Bearish Channel", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
      { topic: "Bearish Triangle", topicIcon: <FiVideo /> },
      { topic: "Quiz", topicIcon: <GrCircleQuestion /> },
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
    <div className="container mx-auto pt-20 pb-4 px-4 md:px-10 max-w-screen-xl">
      <div className="flex flex-col border-2 border-[#f0f0f0] rounded-lg pt-2 pb-4 px-4 ">
        <div className="flex items-center mb-4">
          <span className="w-12 md:w-16 border-2 border-[#f0f0f0] rounded-md px-2 py-3 dark:text-zinc-200">
            <GoStar className="w-8 h-5 md:w-10 md:h-7" />
          </span>
          <div className="ml-2 md:ml-4">
            <h1 className="dark:text-zinc-200 text-lg md:text-xl">COURSE OVERVIEW</h1>
            <div className="flex flex-wrap text-gray-500 font-medium">
              <p>9 Sections</p>
              <p className="px-1 md:px-2">•</p>
              <p>41 Lectures</p>
              <p className="px-1 md:px-2">•</p>
              <p>14h 53min Total Length</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-2 border-r-2 border-l-2 border-b-0 border-solid border-[#f0f0f0] rounded-lg ">
          {courses.map((course, index) => (
            <React.Fragment key={index}>
              <button
                className={`flex justify-between items-start p-4 border-b-2 border-[#f0f0f0] bg-[#f8f8f9] dark:hover:bg-zinc-900 ${index === 0 ? "rounded-t-lg" : ""} ${index === courses.length - 1 ? "rounded-b-lg" : ""}`}
                onClick={() => toggleCourse(index)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex-1">
                    <h3 className="dark:text-zinc-200 w-fit text-left text-xs md:text-base">{course.title}</h3>
                  </div>
                  <div className="flex items-center  space-x-2 ">
                    <h3 className="dark:text-zinc-200 text-xs md:text-sm">{course.lectures}</h3>
                    <p className={`px-0  text-gray-500`}>•</p>
                    <p className={`dark:text-zinc-200 text-xs md:text-sm ${index ===1 ? 'ml-4':"space-x-2"} `}>{course.time}</p>
                  </div>
                  <div className="ml-2 flex items-center justify-center">
                    <IoIosArrowDown
                      className={`dark:text-zinc-200 transition-transform ${accordionOpen[index] ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
              </button>

              <div
                className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out text-sm ${
                  accordionOpen[index] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-0 pt-0 overflow-hidden">
                  {course.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className={`w-full flex border-b-[1px] border-[#f0f0f0]`}>
                      <div className="dark:text-zinc-200 text-xs md:text-base flex flex-1 items-center p-4 justify-start gap-2 md:gap-4">
                        <p>{lesson.topicIcon}</p>
                        <p>{lesson.topic}</p>
                      </div>
                      <p className="dark:text-zinc-200 p-4 text-xs md:text-sm">{course.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
