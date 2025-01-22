"use client"
import Carousel from "./components/Carousel";
import SkillsButtons from "./components/SkillsButtons";

export default function SkillsChallenge() {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">
        Skills Challenges covers various in-demand skills
        <span className="block">and Careers for digital economy</span>
      </h1>
      <h1 className="text-center text-[#687588] my-3">
        Explore the projects that various talents are working on.
      </h1>
      <SkillsButtons />
      <Carousel />
    </div>
  );
}
