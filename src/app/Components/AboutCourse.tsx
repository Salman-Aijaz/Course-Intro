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
    <div className="flex flex-col lg:flex-row justify-evenly lg:py-20 px-8 lg:px-0 font-sans dark:text-zinc-200">
      <div className="lg:max-w-[490px] xl:max-w-screen-sm py-10 lg:py-0 text-justify">
        <h1 className="mb-8 font-bold text-4xl">
          About This Course
        </h1>
        <p className="text-lg">
          A cryptocurrency, crypto-currency, or crypto is a digital currency
          designed to work as a medium of exchange through a computer network
          that is not reliant on any central authority, such as a government or
          bank, to uphold or maintain it.
        </p>
        <p className="mt-4 text-lg">
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
      <div className="bg-gray-50 dark:bg-[rgba(30,41,59,0.5)] p-8 border-2 border-[#f0f0f0] rounded-md">
        <h3 className="mb-4 text-lg md:text-xl font-semibold">
          Skills you will learn
        </h3>

        <div className="flex flex-wrap lg:w-96">
          {cryptoFleetSkills.map((elem, ind) => (
            <span
              key={ind}
              className="p-2 mr-2 my-2 border-2 border-gray-500 rounded-sm text-sm font-semibold"
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