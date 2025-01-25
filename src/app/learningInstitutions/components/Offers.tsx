import React from "react";
import { FaBriefcase } from "react-icons/fa";

const offers = [
  {
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term success..",
  },
  {
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
  },
  {
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
  },
  {
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
  },
  {
    title: "Skills Assessments",
    description:
      "Embed our project-based tests and skills assessments directly into your curriculum.",
  },
];

const Offers = () => {
  return (
    <div className=" py-10 mx-auto container">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* First row */}
        <div className="lg:col-span-4">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full mb-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[0].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">
              {offers[0].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full mb-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[1].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">
              {offers[1].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full mb-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[2].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">
              {offers[2].description}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full mb-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[3].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">
              {offers[3].description}
            </p>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full mb-4">
              <FaBriefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">{offers[4].title}</h3>
            <p className="text-sm leading-relaxed flex-grow">
              {offers[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
