import Image from "next/image";
import bitImage from "../app/assets/andre-francois-mckenzie-iGYiBhdNTpE-unsplash.jpg"
import HeroSection from "./Components/HeroSection";
import Info from "./Components/Info";
import AboutCourse from "./Components/AboutCourse";
import CourseProgram from "./Components/CourseProgram";
import PublicRating from "./Components/PublicRating";
export default function Home() {
  return (
    <div className="bg-black">
    <HeroSection/>
    <Info/>
    <AboutCourse/>
    <CourseProgram/>
    <PublicRating/>
     </div>
  );
}
 