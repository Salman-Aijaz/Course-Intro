import React from 'react'
import Layout from './Layout'
import Navbar from './Navbar'

const AboutCourse = () => {
  return (
    <>    
    <Navbar/>
    <div className='border-b-2 border-slate-800' id='AboutCourse'>
        <div className='ml-0 mr-0 mt-2 pr-4 pl-4 md:ml-0   lg:ml-0 xl:ml-[308px] md:mr-6 lg:mr-6 xl:mr-[308px]'>
     <h1 className='text-white mt-6 mb-6  font-sans text-4xl   font-bold  md:mb-8 lg:mb-8'>About This Course</h1>
     <p className='font-sans	 text-white'>
     A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.
     </p>
     <p className='mt-4 mb-2 text-white font-sans	 '>
     Individual coin ownership records are stored in a digital ledger, which is a computerized database using strong cryptography to secure transaction records, control the creation of additional coins, and verify the transfer of coin ownership.[3][4][5] Despite the term that has come to describe many of the fungible blockchain tokens that have been created, cryptocurrencies are not considered to be currencies in the traditional sense, and varying legal treatments have been applied to them in various jurisdicitons, including classification as commodities, securities, and currencies. Cryptocurrencies are generally viewed as a distinct asset class in practice.[6][7][8] Some crypto schemes use validators to maintain the cryptocurrency. In a proof-of-stake model, owners put up their tokens as collateral. In return, they get authority over the token in proportion to the amount they stake. Generally, these token stakers get additional ownership in the token over time via network fees, newly minted tokens, or other such reward mechanisms
     </p> 
        </div>
        </div>
    </>
  )
}

export default AboutCourse