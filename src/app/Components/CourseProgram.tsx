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
      <div className="mx-auto px-8 xl:px-0 max-w-screen-xl">
        <div className="border-2 border-[#f0f0f0] rounded-lg p-4">
          <div className="flex items-center mb-4">
            <span className="border-2 border-[#f0f0f0] rounded-md p-3">
              <GoStar className="w-8 h-5 md:w-10 md:h-7"/>
            </span>
            <div className="ml-4">
              <h1 className="text-lg md:text-xl">COURSE OVERVIEW</h1>
              <div className="flex gap-2 flex-wrap text-gray-500 font-medium">
                <p>9 Sections</p>
                <p>•</p>
                <p>41 Lectures</p>
                <p>•</p>
                <p>14h 53min Total Length</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-t-2 border-r-2 border-l-2 border-b-0 border-solid
          border-[#f0f0f0] rounded-lg">
            {courses.map((course, index) => (
              <React.Fragment key={index}>
                <button
                  className={`flex p-4 border-b-2 border-[#f0f0f0] bg-[#f8f8f9] dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
                    index === 0 ? "rounded-t-lg" : ""
                  } ${index === courses.length - 1 ? "rounded-b-lg" : ""}`}
                  onClick={() => toggleCourse(index)}
                >
                  <div className="flex flex-1 items-center gap-2">
                  <IoIosArrowDown
                        className={`transition-all duration-150 ${
                          accordionOpen[index] ? "rotate-180" : ""
                        }`}
                      />
                    <h3 className="text-left text-xs md:text-base">
                      {course.title}
                    </h3>
                  </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <h3
                      className="text-xs md:text-sm w-[60px]">
                        {course.lectures}
                      </h3>
                      <p className="text-gray-500">•</p>
                      <p className="text-xs md:text-sm">{course.time}</p>
                    </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500  ${
                    accordionOpen[index] ? "h-full" : "h-0"
                  }`}
                >
                    {course.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex border-b-2 border-[#f0f0f0]">
                        <div className="text-xs md:text-base flex flex-1 items-center p-4 gap-2 md:gap-4">
                          <p>{lesson.topicIcon}</p>
                          <p className="flex-1">{lesson.topic}</p>
                        <p className="text-xs md:text-sm">{course.time}</p>
                        </div>
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
