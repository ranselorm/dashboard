import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-gray-200 dark:bg-secondary-dark-bg dark:text-gray-200 w-full h-44 rounded-xl lg:w-80 p-8 pt-9 m-3  bg-cover bg-no-repeat bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              text="Download"
              color="white"
              bgColor="blue"
              borderRadius="10px"
              size="sm"
            />
          </div>
        </div>
        <div className="flex m-3 items-center justify-center flex-wrap gap-1">
          {earningData.map((data) => (
            <div
              key={data.title}
              className="flex flex-col gap-y-3 bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                style={{ color: data.iconColor, backgroundColor: data.iconBg }}
                className="w-[50px] h-[50px] flex items-center justify-center text-[24px] rounded-full hover:drop-shadow-xl transition-all duration-300"
              >
                {data.icon}
              </button>
              <p>
                <span className="font-bold">{data.amount}</span>
                <span className={`text-[12px] ml-2 text-${data.pcColor}`}>
                  {data.percentage}
                </span>
              </p>
              <h3 className="text-gray-400">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
