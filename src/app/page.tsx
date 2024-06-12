import HeroSection from "./Components/HeroSection";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";
import ThemeSwitch from "./Components/ThemeSwitch";

export default function Home() {
  return (
    <div className= "bg-white  dark:bg-zinc-950 space-y-16 dark:text-zinc-200 font-sans">
    <HeroSection/>
    <AboutCourse/>
    <CourseProgram/>
    <ThemeSwitch/>
     </div>
  );
}
 