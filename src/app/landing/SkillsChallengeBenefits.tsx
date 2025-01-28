import Image from "next/image";
import { AiFillTrophy } from "react-icons/ai";
import { CgBriefcase, CgTrending, CgTrophy, CgUser } from "react-icons/cg";
import { FiTrendingUp } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";
import workSans from "@/fonts/fonts";

export default function SKillsChallengeBenefits() {
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
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-4 p-10 rounded-lg">
            <CgBriefcase
              size={50}
              className="bg-blue-500 text-white p-2 rounded-md text-3xl"
            />
            <div>
              <h3 className="text-lg font-bold">
                Enhance Your Employment Path
              </h3>
              <p className="text-gray-600">
                Network with other talented individuals and learn from their
                experiences.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start gap-4 p-10 rounded-lg">
            <AiFillTrophy
              size={50}
              className="bg-blue-500 text-white text-3xl p-2 rounded-md"
            />
            <div>
              <h3 className="text-lg font-bold">Earn Recognition and Prizes</h3>
              <p className="text-gray-600">
                Gain valuable experience and knowledge to advance your career in
                the digital economy.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 p-10 rounded-lg">
            <CgTrending
              size={50}
              className="bg-blue-500 text-white text-xl p-2 rounded-md"
            />
            <div>
              <h3 className="text-lg font-bold">Personal Growth</h3>
              <p className="text-gray-600">
                Challenge yourself, learn new skills, and expand your
                professional network.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-start gap-4 p-10 rounded-lg">
            <FaMedal
              size={50}
              className="bg-blue-500 text-white p-2 text-3xl rounded-md"
            />
            <div>
              <h3 className="text-lg font-bold">Learn from Industry Experts</h3>
              <p className="text-gray-600">
                Access valuable insights and guidance from experienced
                professionals in the digital careers fields and spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-auto">
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
