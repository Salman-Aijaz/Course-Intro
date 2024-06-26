"use client";
import HeroSection from "./Components/HeroSection";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";
import ThemeSwitch from "./Components/ThemeSwitch";
import { useRef } from "react";

export default function Home() {
  const courseRef = useRef<HTMLDivElement>(null);

  const scrollToCourse = () => {
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-zinc-950 space-y-16 dark:text-zinc-200 font-sans select-none">
      <HeroSection scrollToCourse={scrollToCourse} />
      <AboutCourse />
      <div ref={courseRef}>
        <CourseProgram />
      </div>
      <ThemeSwitch />
    </div>
  );
}
