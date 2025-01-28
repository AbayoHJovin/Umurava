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
      logo: <CgBriefcase size={50} className="bg-blue-500 text-white p-2 rounded-md text-3xl" />,
    },
    {
      id: 2,
      name: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy.",
      logo: <AiFillTrophy size={50} className="bg-blue-500 text-white text-3xl p-2 rounded-md" />,
    },
    {
      id: 3,
      name: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network.",
      logo: <CgTrending size={50} className="bg-blue-500 text-white text-xl p-2 rounded-md" />,
    },
    {
      id: 4,
      name: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
      logo: <FaMedal size={50} className="bg-blue-500 text-white p-2 text-3xl rounded-md" />,
    },
  ];
  
  return (
    <div className={`${workSans.className} bg-[#F9FAFB] py-10`}>
      <div className="flex flex-col items-center justify-center">
        <h1 className={`text-black text-2xl md:text-4xl font-bold text-center`}>
          What else can I gain from{" "}
          <span className="inline md:block">
            participating in skills Challenges?
          </span>
        </h1>{" "}
        <h1 className="text-center text-[#687588] my-3">
          Join Skills Challenges Program to accelerate your career growth and
          become
          <span className="ssm:block">
            part of Africa's largest workforce of digital professionals
          </span>
        </h1>
      </div>
      <div className="flex content-center container mx-auto justify-center items-center px-3 py-12 gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-start gap-4 p-6 rounded-lg shadow-lg bg-white w-full"
          >
            {card.logo}
            <div>
              <h3 className="text-lg font-bold">{card.name}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex max-w-[800px] mx-auto">
        <Image
          src={"/banner_image.png"}
          alt="challenges image"
          width={800}
          height={300}
          objectFit="cover"
        />
      </div>
    </div>
    </div>
  );
}
