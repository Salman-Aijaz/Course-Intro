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
    <div className="flex flex-col lg:flex-row justify-evenly px-4 lg:px-0">
      <div className="lg:w-1/3 my-10 lg:my-0 text-base">
        <h2 className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white">About <span className="text-blue-400">  This </span> Course</h2>
        <p className="my-8 text-gray-500 dark:text-gray-400">
          A cryptocurrency is a digital currency that operates independently of
          central authorities like governments or banks. Transactions and
          ownership records are secured by cryptography and stored in a digital
          ledger.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
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
      <div className="bg-gray-50 dark:bg-[rgba(30,41,59,0.5)] p-4 border  rounded-md lg:h-96">
        <h2 className="mb-4 text-xl font-semibold">
          Skills you will learn
        </h2>

        <div className="flex flex-wrap lg:w-96 gap-x-4 gap-y-4">
          {cryptoFleetSkills.map((cryptoFleetSkill, ind) => (
            <div
              key={ind}
              className="p-2  border border-zinc-700 rounded-sm text-sm font-semibold">
              {cryptoFleetSkill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
