import React from "react";
import SideContent from "../components/SideContent";
import DetailContent from "../components/DetailContent";
import cover from "../assets/images/cover.jpg";
import coverBottom from "../assets/images/cover-bottom.png";
import { dataList } from "../services";
import { useParams } from "react-router-dom";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoChatbubble, IoCheckmarkCircle } from "react-icons/io5";

const OrderDetail = () => {
  const { id } = useParams();
  const data = dataList.find((item) => item.id === parseInt(id));

  return (
    <div className="mb-10">
      <div className="relative w-full h-80 xl:h-140 mb-10 flex flex-col overflow-hidden">
        <div className="w-full h-50 bg-amber-300 xl:h-100 overflow-hidden">
          <img
            src={cover}
            alt=""
            className="w-full h-full object-cover object-top "
          />
        </div>
        <div className="relative w-full bg-slate-600/80 h-30 xl:h-40">
          <div className="absolute bottom-0 left-40 md:left-42 lg:left-55 xl:bottom-8 xl:left-110 w-100 h-30 z-10 py-2 flex flex-col gap-3">
            <div className="">
              <h1 className="text-white text-xl font-bold">{data.name}</h1>
              <h1 className="text-white text-md">{data.publisher}</h1>
            </div>
            <div className="absolute sm:static top-20 -left-35 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <AiFillThunderbolt className="text-sm xl:text-md text-amber-300" />
                <h1 className="text-xs xl:text-sm text-white font-semibold">
                  Proses Instant
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <IoChatbubble className="text-sm xl:text-md text-purple-400" />
                <h1 className="text-xs xl:text-sm text-white font-semibold">
                  Layanan 24/7
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <IoCheckmarkCircle className="text-sm xl:text-md text-blue-400" />
                <h1 className="text-xs xl:text-sm text-white font-semibold">
                  Pembayaran Aman
                </h1>
              </div>
            </div>
          </div>
          <img
            src={coverBottom}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Image Content */}
        <div className="absolute bottom-15 left-5 md:left-7 w-30 h-30 lg:w-40 lg:h-40 xl:bottom-15 xl:left-35 bg-red-500 xl:w-60 xl:h-60 rounded-xl overflow-hidden shadow-2xl">
          <img src={data.image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="container relative w-full mx-auto lg:flex lg:gap-10">
        <SideContent />
        <DetailContent />
      </div>
    </div>
  );
};

export default OrderDetail;
