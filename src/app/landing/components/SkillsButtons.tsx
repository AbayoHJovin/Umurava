"use client";
import workSans from "@/fonts/fonts";
import { useState } from "react";

const SkillsButtons = () => {
  const [selected, setSelected] = useState("UI/UX Design");
  const skills = [
    "UI/UX Design",
    "Data Science",
    "Graphic Design",
    "Data Analysis & Research",
    "Animation",
    "Videography & Photography",
    "AI & Machine Learning",
    "Web3",
    "Digital Marketing & Communications",
  ];

  return (
    <div className={`py-10 px-4 ${workSans.className} `}>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => setSelected(skill)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selected === skill
                ? "bg-blue-600 text-white"
                : "bg-[#F1F1F1] text-[#687588] hover:bg-gray-200"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsButtons;
