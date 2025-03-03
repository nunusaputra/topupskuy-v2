import React, { useEffect, useState } from "react";
import { dataList } from "../services";
import ShinyText from "./animation/shiny-text/ShinyText";

const MainContent = () => {
  // const [data, setData] = useState(dataList);
  const [size, setSize] = useState({
    min: 0,
    max: 0,
    desc: 20,
  });

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 360 && window.innerWidth < 768) {
        setSize({
          min: 15,
          max: 12,
        });
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setSize({
          min: 15,
          max: 15,
        });
      } else if (window.innerWidth >= 1280) {
        setSize({
          min: 30,
          max: 20,
        });
      } else {
        setSize({
          min: 12,
          max: 10,
          desc: 15,
        });
      }
    };

    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div className="flex flex-col gap-20 mb-[10rem]">
      {/* Games */}
      <div className="flex flex-col gap-5">
        <h1 className="text-xl sm:text-2xl text-white font-semibold mb-2">
          🎮 Games
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-7">
          {dataList.map((item) => (
            <a href={`/order/${item.id}`} key={item.id}>
              <div className="w-[100%] h-50 md:h-65 flex flex-col bg-[#060911] rounded-lg ring-2 ring-purple-500 ring-offset-0 transition-all duration-300 hover:ring-offset-8 hover:rotate-3 hover:ring-offset-[#060911] hover:cursor-pointer overflow-hidden">
                <div className="w-full h-35 md:h-50 bg-red-500">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-15 bg-purple-500/20 px-2 py-1 flex flex-col">
                  <h1 className="text-white text-lg font-bold">
                    {item.name.length > size.min
                      ? `${item.name.substring(0, size.max)}...`
                      : item.name}
                  </h1>
                  <h1 className="text-white text-sm">
                    {item.publisher.length > size.desc
                      ? `${item.publisher.substring(0, size.desc)}...`
                      : `${item.publisher}`}
                  </h1>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center">
          <ShinyText
            text="Show more"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
