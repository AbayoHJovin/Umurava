import Image from "next/image";
import { AiFillTrophy } from "react-icons/ai";
import { CgBriefcase, CgTrending, CgTrophy, CgUser } from "react-icons/cg";
import { FiTrendingUp } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";
import workSans from "@/fonts/fonts";

export default function SKillsChallengeBenefits() {
  const cardData = [
    {
      id: 1,
      name: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences.",
      logo: (
        <CgBriefcase
          size={50}
          className="bg-blue-500 text-white p-2 rounded-md text-3xl"
        />
      ),
    },
    {
      id: 2,
      name: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy.",
      logo: (
        <AiFillTrophy
          size={50}
          className="bg-blue-500 text-white text-3xl p-2 rounded-md"
        />
      ),
    },
    {
      id: 3,
      name: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network.",
      logo: (
        <CgTrending
          size={50}
          className="bg-blue-500 text-white text-xl p-2 rounded-md"
        />
      ),
    },
    {
      id: 4,
      name: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
      logo: (
        <FaMedal
          size={50}
          className="bg-blue-500 text-white p-2 text-3xl rounded-md"
        />
      ),
    },
  ];

  return (
    <div className={`${workSans.className} py-10`}>
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center text-center mx-4 md:mx-6 lg:mx-auto max-w-7xl">
        <h1 className="text-black text-2xl md:text-4xl font-bold">
          What else can I gain from{" "}
          <span className="inline md:block">
            participating in skills Challenges?
          </span>
        </h1>
        <p className="text-[#687588] my-3">
          Join Skills Challenges Program to accelerate your career growth and
          become part of Africa's largest workforce of digital professionals
        </p>
      </div>

      {/* Cards and Image Section */}
      <div className="mx-4 md:mx-6 lg:mx-auto max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-start gap-3 p-3 rounded-lg"
              >
                {card.logo}
                <div>
                  <h3 className="text-lg font-bold">{card.name}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image (Hidden on smaller screens) */}
          <div className="hidden lg:flex w-full lg:w-1/2 max-w-[600px]">
            <Image
              src={"/banner_image.png"}
              alt="challenges image"
              width={800}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}