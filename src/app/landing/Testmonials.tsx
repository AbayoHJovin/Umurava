"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestmonialVideoContainer from "@/components/TestmonialVideoContainer";
import workSans from "@/fonts/fonts";

export default function Testmonials() {
  const testmonials = [
    {
      id: 1,
      witness: "Manzi Jack",
      role: "Product designer",
      location: "Kigali",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
    {
      id: 2,
      witness: "Jane Doe",
      role: "Software Engineer",
      location: "New York",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
    {
      id: 3,
      witness: "Alex Smith",
      role: "Data Scientist",
      location: "London",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
    {
      id: 4,
      witness: "Maria Garcia",
      role: "Marketing Specialist",
      location: "Madrid",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
    {
      id: 5,
      witness: "Alex Smith",
      role: "Data Scientist",
      location: "London",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
    {
      id: 6,
      witness: "Maria Garcia",
      role: "Marketing Specialist",
      location: "Madrid",
      profileImage: "https://picsum.photos/200",
      video: "",
      thumbnail: "/testmonialThumbnail.png",
    },
  ];

  return (
    <div className={`${workSans.className} p-4 xmd:px-10 llg:px-36`}>
  <div className="flex flex-col items-start mb-6 mx-3 sm:mx-6 lg:mx-8 xl:mx-10">
    <h1 className="text-black text-2xl md:text-4xl font-bold text-center sm:text-start">
      Users are in Love with Skills{" "}
      <span className="inline md:block">Challenges Program</span>
    </h1>
    <h1 className="text-[#687588] my-3 text-center sm:text-start">
      See what our clients say about working with us. Their success
      <span className="inline md:block">
        speaks for our dedication and expertise.
      </span>
    </h1>
  </div>

  <Swiper
    spaceBetween={20}
    slidesPerView="auto"
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    }}
    pagination={{
      clickable: true,
      el: ".custom-pagination",
    }}
    modules={[Pagination]}
    className="w-full px-3 sm:px-6 lg:px-8 xl:px-10"
  >
    <div className="flex items-center justify-center">
      {testmonials.map((testmony) => (
        <SwiperSlide key={testmony.id}>
          <div className="flex space-x-5 justify-center items-center">
            <TestmonialVideoContainer testimony={testmony} />
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>

  <div className="custom-pagination flex justify-center mt-6"></div>
  <style jsx global>{`
    .custom-pagination .swiper-pagination-bullet {
      background-color: #d1d5db; /* Gray bullets */
      width: 12px;
      height: 12px;
      margin: 0 5px;
      opacity: 1; /* Ensure full opacity for visibility */
    }
    .custom-pagination .swiper-pagination-bullet-active {
      background-color: #3b82f6; /* Blue active bullet */
    }
  `}</style>
</div>
  );
}