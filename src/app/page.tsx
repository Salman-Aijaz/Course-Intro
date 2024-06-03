import HeroSection from "./Components/HeroSection";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";

export default function Home() {
  return (
    <div className= "bg-white dark:bg-zinc-950">
    <HeroSection/>
    <AboutCourse/>
    <CourseProgram/>
     </div>
  );
}
 