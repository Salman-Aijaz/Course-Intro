"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const router: any = useRouter();

  const isHeroComponent = router.pathname === "/";
  const isInfoComponent = router.pathname === "/info";

  if (isHeroComponent || isInfoComponent) {
    return null;
  }

  const [showNavbar, setShowNavbar] = useState(false);
  const [selectedItem, setSelectItem] = useState("Home");

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleItemClick = (item: string) => {
    setSelectItem(item);
    setShowNavbar(false);
  };

  console.log(selectedItem);
  return (
    <div className="bg-[rgba(29,22,22,0.5)] border-b-[rgba(39,39,42)] border-solid border-b-[1px] z-50 top-0 sticky mt-[6px] pl-[20px] pr-[18px] w-full h-full sm:h-full md:h-full lg:h-full xl:h-full backdrop-blur-sm	">
      <div className="container  mx-auto px-[15px] flex   flex-col md:flex-col lg:flex-col xl:flex-col  md:items-start">
        <nav className="flex  ">
          <div className="hidden sm:hidden  pt-4 pb-2 m-1 mr-[124px] lg:mr-1 xl:mr-1 sm:mr-[124px] md:mr[124px] md:flex lg:flex   md:flex-row lg:flex-row xl:flex-row text-white  text-lg font-normal box-border">
            <Link href="/" passHref>
              <div className="mr-[44px]">Home</div>
            </Link>
            <Link href="#AboutCourse" passHref>
              <div className="mr-[44px]">About</div>
            </Link>
            <Link href="#course" passHref>
              <div className="mr-[44px]">Course Program</div>
            </Link>
            <Link href="#rating" passHref>
              <div className="mr-[44px]">Public Rating</div>
            </Link>
          </div>
        </nav>
        <div className="py-1 w-full">
          <div className="flex grow my-2 justify-between  md:hidden lg:hidden xl:hidden">
            <button
              className="text-white flex items-center justify-between w-full cursor-pointer focus:outline-none "
              onClick={handleToggleNavbar}
            >
              <span className="text-lg ">{selectedItem}</span>
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>

      {showNavbar && (
        <div className="md:hidden lg:hidden xl:hidden">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white text-lg font-normal">
            <Link href="/" passHref>
              <div
                className="py-2 px-4"
                onClick={() => handleItemClick("Home")}
              >
                Home
              </div>
            </Link>
            <Link href="#AboutCourse" passHref>
              <div
                className="py-2 px-4"
                onClick={() => handleItemClick("About")}
              >
                About
              </div>
            </Link>
            <Link href="#course" passHref>
              <div
                className="py-2 px-4"
                onClick={() => handleItemClick("Course Program")}
              >
                Course Program
              </div>
            </Link>
            <Link href="#rating" passHref>
              <div
                className="py-2 px-4"
                onClick={() => handleItemClick("Public Rating")}
              >
                Public Rating
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
