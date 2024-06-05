import React from "react";

const AboutCourse = () => {
  const cryptoFleetSkills = [
    "Spot Trade",
    "Candle Stick Chart",
    "Recognising Market Trends",
    "Understanding Market Trend",
    "Liquidity",
    "Margin",
    "Limit Order",
    "Market Order",
  ];

  return (
    <div className="container flex flex-col lg:flex-row px-4 md:px-10 justify-center max-w-screen-xl font-sans">
      <div className="lg:mr-[20px] xl:mr-[150px] pt-20">
        <h1 className="dark:text-zinc-200 mb-8 font-bold text-4xl">
          About This Course
        </h1>
        <p className="dark:text-zinc-200 text-lg">
          A cryptocurrency, crypto-currency, or crypto is a digital currency
          designed to work as a medium of exchange through a computer network
          that is not reliant on any central authority, such as a government or
          bank, to uphold or maintain it.
        </p>
        <p className="mt-4 mb-6 text-lg dark:text-zinc-200">
          Individual coin ownership records are stored in a digital ledger,
          which is a computerized database using strong cryptography to secure
          transaction records, control the creation of additional coins, and
          verify the transfer of coin ownership.3 4 5 Despite the term that has
          come to describe many of the fungible blockchain tokens that have been
          created, cryptocurrencies are not considered to be currencies in the
          traditional sense, and varying legal treatments have been applied to
          them in various jurisdicitons, including classification as
          commodities, securities, and currencies. Cryptocurrencies are
          generally viewed as a distinct asset class in practice.6 7 8 Some
          crypto schemes use validators to maintain the cryptocurrency. In a
          proof-of-stake model, owners put up their tokens as collateral. In
          return, they get authority over the token in proportion to the amount
          they stake.
        </p>
      </div>
      <div className="bg-gray-50 dark:bg-[rgba(30,41,59,0.5)] p-8 border-2 border-[#f0f0f0] rounded-md lg:mt-52 w-fit lg:max-h-[368px]">
        <h3 className="mb-4 dark:text-zinc-200 text-lg md:text-xl font-semibold">
          Skills you will learn
        </h3>

        <div className="flex flex-wrap w-fit lg:w-[335px]">
          {cryptoFleetSkills.map((elem, ind) => (
            <span
              key={ind}
              className="p-2 mr-2 my-2 border border-gray-500 dark:text-zinc-200 rounded-sm text-sm font-semibold"
            >
              {elem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
