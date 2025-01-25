import React from "react";
import { FaBriefcase } from "react-icons/fa";

const offers = [
  {
    title: "Bridging the Experience Ga",
    description:
      "Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools.",
  },
  {
    title: "Bridging Education and Employment",
    description:
      "Traditional education doesn’t always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges.",
  },
  {
    title: "Preparing Talents for Global Job Markets",
    description:
      "We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and stand out globally.",
  },
];

const SolvedProblems = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-500 rounded-full mb-4">
              <FaBriefcase size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[0].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">{offers[0].description}</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-500 rounded-full mb-4">
              <FaBriefcase size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[1].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">{offers[1].description}</p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="bg-blue-500 text-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-500 rounded-full mb-4">
              <FaBriefcase size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[2].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">{offers[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedProblems;