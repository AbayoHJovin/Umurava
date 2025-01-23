// import TestmonialVideoContainer from "@/components/TestmonialVideoContainer";

// export default function Testmonials() {
//   const testmonials = [
//     {
//       id: 1,
//       witness: "Manzi Jack",
//       role: "Product designer",
//       location: "Kigali",
//       profileImage: "https://picsum.photos/200",
//       video: "",
//       thumbnail: "/testmonialThumbnail.png",
//     },
//     {
//       id: 1,
//       witness: "Manzi Jack",
//       role: "Product designer",
//       location: "Kigali",
//       profileImage: "https://picsum.photos/200",
//       video: "",
//       thumbnail: "/testmonialThumbnail.png",
//     },
//     {
//       id: 1,
//       witness: "Manzi Jack",
//       role: "Product designer",
//       location: "Kigali",
//       profileImage: "https://picsum.photos/200",
//       video: "",
//       thumbnail: "/testmonialThumbnail.png",
//     },
//     {
//       id: 1,
//       witness: "Manzi Jack",
//       role: "Product designer",
//       location: "Kigali",
//       profileImage: "https://picsum.photos/200",
//       video: "",
//       thumbnail: "/testmonialThumbnail.png",
//     },
//   ];
//   return (
//     <div className="container mx-auto">
//       <div className="flex flex-col items-start">
//         <h1 className={`text-black text-4xl font-bold`}>
//           Users are in Love with Skills
//           <span className="block">Challenges Program</span>
//         </h1>{" "}
//         <h1 className=" text-[#687588] my-3">
//           See What our clients say about working with us. Their success
//           <span className="ssm:block">
//             speaks for our dedication and expertise{" "}
//           </span>
//         </h1>
//       </div>
//       {testmonials.map((testmony) => (
//         <TestmonialVideoContainer testimony={testmony} />
//       ))}
//     </div>
//   );
// }

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestmonialVideoContainer from "@/components/TestmonialVideoContainer";

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
  ];

  return (
    <div className="container mx-auto bg-white">
      {/* Header */}
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-black text-4xl font-bold">
          Users are in Love with Skills
          <span className="block">Challenges Program</span>
        </h1>
        <h1 className="text-[#687588] my-3">
          See what our clients say about working with us. Their success
          <span className="block">
            speaks for our dedication and expertise.
          </span>
        </h1>
      </div>

      {/* Swiper Component */}
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView="auto" // Automatically adjust number of visible slides
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for small screens
          768: { slidesPerView: 2 }, // 2 slides for medium screens
          1024: { slidesPerView: 3 }, // 3 slides for large screens
          1280: { slidesPerView: 4 }, // 4 slides for extra-large screens
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {testmonials.map((testmony) => (
          <SwiperSlide key={testmony.id}>
            <div className="flex space-x-5">
              <TestmonialVideoContainer testimony={testmony} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10">
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* Gray bullets */
            width: 12px;
            height: 12px;
            margin: 0 5px;
          }
          .swiper-pagination-bullet-active {
            background-color: #3b82f6; /* Blue active bullet */
          }
        `}</style>
      </div>
    </div>
  );
}
