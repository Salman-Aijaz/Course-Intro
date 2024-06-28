"use client";
import HeroSection from "./Components/HeroSection";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";
import ThemeSwitch from "./Components/ThemeSwitch";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const courseRef = useRef<HTMLDivElement>(null);
  const [highlight,setHighLight]= useState<boolean>(false)
  const scrollToCourse = () => {
    courseRef.current?.scrollIntoView({ behavior: "smooth" });
    setHighLight(true)
  };

  console.log(highlight)
  useEffect(()=>{
     if(highlight){
         const timer = setTimeout(()=> setHighLight(false),1500)
         return()=> clearTimeout(timer)
     }
  },[highlight])

  return (
    <div className="bg-white dark:bg-zinc-950 space-y-16 dark:text-zinc-200 font-sans select-none">
      <HeroSection scrollToCourse={scrollToCourse} />
      <AboutCourse />
      <div ref={courseRef}>
        <CourseProgram   isHighlighted={highlight} />
      </div>
      <ThemeSwitch />
    </div>
  );
}
