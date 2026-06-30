// import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import { Stacked } from "../components";
import SparkLine from "../components/Charts/SparkLine";
import {
  earningData,
  SparklineAreaData,
} from "../data/dummy";

import { useStateContext } from "../context/ContextProvider";
import Button from "../components/Button";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-16 md:mt-12">
      <div className="flex flex-wrap   lg:flex-nowrap justify-center">
        <div
          className="bg-white bg-hero-pattern dark:text-gray-200
         dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
         bg-no-repeat bg-center bg-cover  "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-900">Earnings</p>
              <p className="text-2xl ">$99.88.446</p>
            </div>
          </div>
          <div className="mt-6 -ml-2">
            <Button
              color="white"
              bgColor={currentColor}
              text="View Earnings"
              borderRadius="10px "
              size="md"
            />
          </div>
        </div>
        <div className="flex m-1 justify-center flex-wrap items-center ">
          {earningData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200
               p-4  pt-9 rounded-2xl  m-1 md:w-52"
            >
              <button
                style={{ color: item.iconColor, background: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl 
             transition duration-[300ms] "
              >
                {item.icon}
              </button>
              <p className=" mt-3 font-semibold ">
                <span className="text-xl font-semibold ">{item.amount}</span>
                <span
                  className={`text-sm ${item.pcColor === "red-600" ? "text-red-600" : "text-green-600"} ml-2`}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}{" "}
        </div>
      </div>
      <div className="flex gap-10  flex-wrap justify-center">
        <div
          className=" bg-white dark:text-gray-200
         dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold  text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 p-1 rounded-lg transition duration-[300ms]">
                <span><GoDotFill /></span>
                <span className="select-none">Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:bg-gray-100 p-1 rounded-lg transition  duration-[300ms]">
                <span>
                  <GoDotFill />
                </span>
                <span className=" select-none">Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 gap-10 flex flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold "> $99.88.446</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full transition duration-[300ms]
                   text-white bg-green-400 ml-3 "
                  >
                    23%
                  </span>
                </p>
                <p className="text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold "> $84.446</span>
              </p>
                <p className="text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="100%"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10 ">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="w-full max-w-xs md:max-w-sm">
              <Stacked width="100%" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
