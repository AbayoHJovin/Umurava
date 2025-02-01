import workSans from "@/fonts/fonts";
import { FiShoppingBag } from "react-icons/fi";
import StatsSection from "./components/Stats";

export default function Section2() {
  return (
    <div className={`bg-gray-50 py-5`}>
      {/* Text Section */}
      <div
        className={`flex flex-col ${workSans.className} items-center text-center px-4 md:px-0`}
      >
        <h1 className={`text-black text-2xl md:text-4xl font-bold`}>
          Experience a New Way of Building
          <span className="inline md:block"> Work Experience</span>
        </h1>
        <h1 className="text-[#687588] text-lg my-5 text-center md:text-start max-w-[800px] mx-auto">
          Join Skills Challenge Program to accelerate your career growth and
          become{" "}
          <span className="inline md:block">
            part of Africa's largest workforce of digital professionals.
          </span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="py-8 px-4 md:px-16 flex justify-center items-center">
        <div className="space-y-3 w-full max-w-[1200px]">
          {/* First Card */}
          <div className="bg-blue-600 text-white rounded-lg p-6 w-full max-w-[1000px] mx-auto">
            <div className="bg-white rounded-md p-3 mb-4 inline-block">
              <FiShoppingBag className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-lg font-bold mb-3">
              Build a Strong Portfolio and Hand-On Experience
            </h2>
            <p className="text-sm">
              Tackle real-world projects through challenges and hackathons that
              mirror real-world challenges faced by businesses and organizations.
              Therefore, showcase your skills and accomplishments to potential
              employers and clients through a portfolio of completed projects.
            </p>
          </div>

          {/* Second and Third Cards */}
          <div className="flex flex-col xmd:flex-row gap-3 w-full max-w-[1000px] mx-auto">
            {/* Second Card */}
            <div className="bg-blue-600 text-white rounded-lg p-6 w-full xmd:w-1/2 h-[250px]">
              <div className="bg-white rounded-md p-3 mb-4 inline-block">
                <FiShoppingBag className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-lg font-bold mb-3">
                Enhance Your Employment Path
              </h2>
              <p className="text-sm">
                Develop the in-demand skills and build a strong portfolio to
                increase your chances of landing your dream job or contract.
              </p>
            </div>

            {/* Third Card */}
            <div className="bg-blue-600 text-white rounded-lg p-6 w-full xmd:w-1/2 h-[250px]">
              <div className="bg-white rounded-md p-3 mb-4 inline-block">
                <FiShoppingBag className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-lg font-bold mb-3">
                Earn Recognition and Prizes
              </h2>
              <p className="text-sm">
                Earn both Money and Knowledge Prizes by participating in various
                contests and competitions by working on real-world projects and
                hackathons from our partner companies & organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center my-6 px-4 md:px-0">
        <StatsSection />
      </div>
    </div>
  );
}