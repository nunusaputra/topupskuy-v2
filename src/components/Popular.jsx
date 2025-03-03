import React from "react";
import pattern from "../assets/images/pattern.png";
import { dataList } from "../services";

const Popular = () => {
  return (
    <section className="">
      <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
        🔥Popular
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dataList
          .filter((rank) => rank.count_buy >= 1500)
          .map((item) => (
            <div className="relative w-full h-25 bg-purple-500/40 rounded-lg flex gap-2 p-2 ring-2 ring-purple-500 ring-offset-0 transition-all duration-300 hover:ring-offset-4 hover:ring-offset-[#060911] group hover:cursor-pointer overflow-hidden">
              <div className="w-30 h-full bg-red-500 rounded-lg group-hover:scale-95 transition-all duration-300 overflow-hidden z-10">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>
              <div className="w-70 h-full rounded-lg px-2 flex flex-col justify-center z-10">
                <h1 className="text-white text-lg font-bold">{item.name}</h1>
                <h1 className="text-white text-md font-medium">
                  {item.publisher}
                </h1>
              </div>

              {/* Pattern Background */}
              <div className="absolute w-full h-full top-0 left-0 opacity-40">
                <img
                  src={pattern}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Popular;
