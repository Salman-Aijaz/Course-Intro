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
    <div className="flex flex-col lg:flex-row justify-evenly px-8 lg:px-0">
      <div className="lg:w-2/5 my-10 lg:my-0 text-justify">
        <h1 className="font-bold text-4xl">About This Course</h1>
        <p className="my-8 text-lg">
          A cryptocurrency is a digital currency that operates independently of
          central authorities like governments or banks. Transactions and
          ownership records are secured by cryptography and stored in a digital
          ledger.
        </p>
        <p className="text-lg">
          Cryptocurrencies are often classified as assets rather than
          traditional currencies, with various legal treatments worldwide. Some
          systems use validators in a proof-of-stake model, where owners stake
          tokens to gain authority over them. Enhance your knowledge of
          cryptocurrency, its limitations, capabilities, and the way it
          functions within the economic environment in the Cryptocurrency online
          short course from the Crypto Fleet. Taking a comprehensive approach,
          you'll explore cryptocurrencies in comparison with traditional
          finance, and gain insight into how start-ups, financial institutions,
          big tech, and central banks are adapting to its emergence.
        </p>
      </div>
      <div className="bg-gray-50 dark:bg-[rgba(30,41,59,0.5)] p-8 border-2 border-[#f0f0f0] rounded-md lg:h-96">
        <h3 className="mb-4 text-lg md:text-xl font-semibold">
          Skills you will learn
        </h3>

        <div className="flex flex-wrap lg:w-96">
          {cryptoFleetSkills.map((elem, ind) => (
            <span
              key={ind}
              className="p-2 mr-2 mb-4 border-2 border-gray-500 rounded-sm text-sm font-semibold">
              {elem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
