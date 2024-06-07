import HeroSection from "./Components/HeroSection";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";
import ThemeSwitch from "./Components/ThemeSwitch";

export default function Home() {
  return (
    <div className= "bg-white  space-y-10  ">
    <HeroSection/>
    <AboutCourse/>
    <CourseProgram/>
    <ThemeSwitch/>
     </div>
  );
}
 