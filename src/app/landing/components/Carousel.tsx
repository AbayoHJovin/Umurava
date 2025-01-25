// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";
import workSans from "@/fonts/fonts";

export default function Carousel() {
  return (
    <div className={`flex justify-center items-center py-10 ${workSans.className} `}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="max-w-4xl"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-[#F1F1F1] rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
              <Image src={"/sf.png"} width={50} height={50} alt="sf" />
              <p className="text-gray-600 mb-4">
                The Embedded Finance Platform Payroll Management Software
                Solutions for your organization and Workforce.
              </p>
              <button className="text-blue-500 font-bold flex items-center gap-3 py-2 px-4 rounded hover:text-blue-600 transition">
                Learn more
                <span className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center">
                  <CgArrowRight size={10} />
                </span>
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="./payroll.png"
                alt="Dashboard example"
                className="w-full h-auto"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
