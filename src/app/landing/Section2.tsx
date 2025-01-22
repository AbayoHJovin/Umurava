import workSans from "@/fonts/fonts";
import { FiShoppingBag } from "react-icons/fi";
import StatsSection from "./components/Stats";

export default function Section2() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col  items-center text-center">
        <h1 className={`text-black text-4xl font-bold ${workSans.variable}`}>
          Experience a New Way of Building
          <span className="block">Work Experience</span>
        </h1>
        <h1 className="text-[#687588] text-lg">
          Join Skills Challenge Program to accelerate your career growth and
          become
          <span className="block">
            part of Africa's largest workforce of digital professionals.
          </span>
        </h1>
      </div>
      <div className=" py-8 px-4 md:px-16 flex justify-center items-center">
        <span className="block space-y-3 items-center gap-2">
          {/* //the first container */}
          <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 w-fit xmd:w-[850px]">
            <div className="bg-white rounded-md p-3 mb-4 inline-block">
              <FiShoppingBag className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-lg font-bold mb-3">
              Build a Strong Portfolio and Hand-On Experience
            </h2>
            <p className="text-sm">
              Tackle real-world projects through challenges and hackathons that
              mirror real-world challenges faced by businesses and
              organizations. Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portfolio of
              completed projects.
            </p>
          </div>
          {/* The below two rows */}
          <div className="flex flex-col xmd:flex-row gap-2 items-center">
            {/* The second component*/}
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 w-fit xmd:w-[425px] h-[250px]">
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
            {/* The fourth component */}
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 w-fit xmd:w-[425px] h-[250px]">
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
        </span>
      </div>
      <div className="flex justify-center my-6">
        <StatsSection />
      </div>
    </div>
  );
}
