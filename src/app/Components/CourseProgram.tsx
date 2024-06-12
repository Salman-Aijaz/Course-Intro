"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { GrCircleQuestion } from "react-icons/gr";
import { GoStar } from "react-icons/go";

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
    time: "40 Minute",
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
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>(
    new Array(courses.length).fill(false)
  );

  const toggleCourse = (index: number) => {
    setAccordionOpen((previous) =>
      previous.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="mx-auto px-4 xl:px-0 max-w-screen-xl">
      <div className="border border-[#f0f0f0] dark:shadow-md dark:shadow-zinc-900 dark:border-zinc-900 rounded-lg p-2 sm:p-4">
        <div className="flex items-center mb-4 gap-4">
          <div className="border dark:shadow-md dark:shadow-zinc-900 dark:border-zinc-900 border-[#f0f0f0] rounded-md p-3 hidden sm:block">
            <GoStar className="w-9 h-7"/>
          </div>
          <div>
            <h2 className="text-xl font-semibold">COURSE OVERVIEW</h2>
            <p className="text-gray-500 font-medium">
              <span className="sm:hidden px-1">•</span>9 Sections
              <br className="sm:hidden"/>
              <span className="px-1">•</span>27 Lectures
              <br className="sm:hidden"/>
              <span className="px-1">•</span>2h 30min Total Length
            </p>
          </div>
        </div>
        <div
          className="flex flex-col border-t border-r border-l border-b-0 
          border-[#f0f0f0] dark:shadow-md dark:shadow-zinc-900 dark:border-zinc-900 rounded-lg text-xs sm:text-base">
          {courses.map((course, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex px-2 py-4 border-b border-[#f0f0f0] dark:border-zinc-900  bg-[#f8f8f9] 
                  dark:shadow-md dark:shadow-zinc-900 dark:bg-zinc-950 dark:hover:bg-zinc-900 cursor-pointer ${
                    index === 0 ? "rounded-t-lg" : ""
                  } ${index === courses.length - 1 ? "rounded-b-lg" : ""}`}
                onClick={() => toggleCourse(index)}
              >
                <div className="flex flex-1 items-center gap-1">
                  <IoIosArrowDown
                    className={`transition-transform ease-in ${
                      accordionOpen[index] ? "rotate-180" : ""
                    }`}
                  />
                  <p>{course.title}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <p
                    className={`${course.lectures.length <= 9 ? "w-16" : ""}  `}
                  >
                    {course.lectures}
                  </p>
                  <p className="text-gray-500">•</p>
                  <p>{course.time}</p>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300  ${
                  accordionOpen[index] ? "h-fit" : "h-0"
                }`}
              >
                {course.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="dark:shadow-md dark:shadow-zinc-900 dark:border-zinc-900 border-b border-[#f0f0f0]
                    flex items-center  px-2 py-4 gap-2">
                    <p>{lesson.topicIcon}</p>
                    <p className="flex-1">{lesson.topic}</p>
                    <p>{course.time}</p>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
