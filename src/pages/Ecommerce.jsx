import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

import Line from "./charts/Line";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <section className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-gray-200 dark:bg-secondary-dark-bg dark:text-gray-200 w-full h-44 rounded-xl lg:w-80 p-8 pt-9 m-3 bg-cover bg-no-repeat bg-center">
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
      </section>
      <section className="flex flex-wrap justify-center gap-10 mt-12">
        <div className="bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex items-center justify-between mb-6">
            <p className="font-semibold text-[20px] justify-center">
              Revenue Updates
            </p>
            <div className="flex gap-x-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex items-start flex-col md:flex-row justify-between">
            <article className="flex flex-col gap-y-4 m-10 border-r-1 border-color pr-20">
              <div>
                <p className="text-[30px] flex items-center">
                  <span className="font-semibold">$93,438</span>
                  <span className="bg-green-400 rounded-full p-1.5 text-[10px] text-white ml-3">
                    23%
                  </span>
                </p>
                <p className="-mt-[10px] text-gray-400">Budget</p>
                <p className="text-[30px] font-semibold">$48,487</p>
                <p className="-mt-[10px] text-gray-400">Expense</p>
              </div>
              <div>{/* <SparkLine /> */}</div>
              <div>
                <Button
                  text="Download Report"
                  bgColor="blue"
                  color="white"
                  borderRadius="10px"
                />
              </div>
            </article>
            <div className="w-full mt-20 md:mt-0">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
