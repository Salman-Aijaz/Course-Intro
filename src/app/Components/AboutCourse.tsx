import React from 'react'
import Layout from './Layout'
import Navbar from './Navbar'

const AboutCourse = () => {

  const cryptoFleetSkills=["Spot Trade","Candle Stick Chart","Recognising Market Trends","Understanding Market Trend","Liquidity","Margin","Limit Order","Market Order"]

  return (
    <>    
    {/* <Navbar/> */}
   <div className='container flex flex-col sm:flex-col md:flex-col lg:flex-row  px-4 md:px-10 justify-center  max-w-screen-xl ' id='AboutCourse'>
   
        <div className='ml-0 mr-0 pr-0 pl-0 pb-0 sm:mr-0 md:ml-0  lg:ml-0 md:mr-0 lg:mr-[150px] xl:mr-[150px] xl:ml-0 py-20 md:pb-0  px-10'>
     <h1 className='text-white  mb-6 font-sans font-bold text-4xl  md:mb-12 lg:mb-8'>About This Course</h1>
     <p className='text-white text-lg'>
     A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.
     </p>
     <p className='mt-4 mb-6 text-lg text-white'>
     Individual coin ownership records are stored in a digital ledger, which is a computerized database using strong cryptography to secure transaction records, control the creation of additional coins, and verify the transfer of coin ownership.[3][4][5] Despite the term that has come to describe many of the fungible blockchain tokens that have been created, cryptocurrencies are not considered to be currencies in the traditional sense, and varying legal treatments have been applied to them in various jurisdicitons, including classification as commodities, securities, and currencies. Cryptocurrencies are generally viewed as a distinct asset class in practice.[6][7][8] Some crypto schemes use validators to maintain the cryptocurrency. In a proof-of-stake model, owners put up their tokens as collateral. In return, they get authority over the token in proportion to the amount they stake.
     </p> 
        </div>
        <div className='bg-[rgba(30,41,59,0.5)]  p-[30px]  rounded-md  mt-0 sm:mt-0 lg:mt-44 md:mt-0 xl:mt-44 w-fit lg:w-[335px]  min-h-auto md:min-h-auto lg:max-h-[368px]'>
          <h3 className=' font-sans mb-4	 text-white text-lg md:text-xl font-semibold'>Skills you will learn </h3>
          
       <div className="flex flex-wrap w-fit lg:w-[335px] ">
        {cryptoFleetSkills.map((elem,ind)=>(

        <span key={ind} className="p-2 mr-2 my-2 border border-zinc-600 text-white rounded-sm text-sm font-semibold font-sans">{elem}</span>
        ))}
       </div>
          </div>       

        </div>
    </>
  )
}

export default AboutCourse