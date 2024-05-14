"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Navbar = () => {

    const router:any = useRouter()
    // const shouldShowNavbar = ['/about', '/course', '/rating'].includes(router.currentPath)
    
    const isHeroComponent = router.pathname === "/"
    const isInfoComponent = router.pathname === "/info"
     
    if (isHeroComponent || isInfoComponent) {
      return null;
  }
  return (
    
    <div  className='bg-[rgba(29,22,22,0.5)] border-b-[rgba(39,39,42)] border-solid border-b-[1px] z-50 top-0 sticky mt-[6px] pl-[20px] pr-[18px] w-full h-full sm:h-full md:h-[68px] lg:h-[68px] xl:h-[68px] backdrop-blur-sm	'>
    <div className="container mx-auto px-[15px] flex   flex-col md:flex-row lg:flex-row xl:flex-row items-center">
            <nav className="flex justify-end flex-col sm:flex-row md:flex-row  lg:flex-row xl:flex-row">
              <div className='py-4 m-1 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row text-white  text-lg font-normal box-border'>
              <Link href="/" passHref><div className="mr-[44px]">Home</div></Link>
              <Link href="/about" passHref><div className="mr-[44px]">About</div></Link>
              <Link href="/course" passHref><div className="mr-[44px]">Course Program</div></Link>
              <Link href="/rating" passHref><div className="mr-[44px]">Public Rating</div></Link>
              </div>
            </nav>      
    </div>
  </div>
  )
}

export default Navbar