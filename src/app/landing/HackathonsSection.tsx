"use client";
import ChallengeComponent from "@/components/ChallengeComponent";
import workSans from "@/fonts/fonts";
import { useRouter } from "next/navigation";

export default function HackathonsSection() {
  const router = useRouter();
  const challenges = [
    {
      challengeId: "1",
      challengeStatus: "Open",
      challengeImage: "/challengeImage.png",
      challengeName:
        "Design Dashboard for SokoFund which is the largest business",
      challengeSkills: ["UI/UX Design", "User Research", "User Research"],
      challengeSeniorityLevel: "(Junior,Intermediate,Senior)",
      challengeTimeline: "15 days",
    },
    {
      challengeId: "2",
      challengeStatus: "Open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
    {
      challengeId: "3",
      challengeStatus: "Open",
      challengeImage: "/challengeImage.png",
      challengeName: "Develop E-commerce Website",
      challengeSkills: ["Node.js", "MongoDB", "Tailwind CSS"],
      challengeSeniorityLevel: "(Junior, Intermediate)",
      challengeTimeline: "20 days",
    },
    {
      challengeId: "4",
      challengeStatus: "Open",
      challengeImage: "/challengeImage.png",
      challengeName: "Build AI Chatbot",
      challengeSkills: ["Python", "AI/ML", "NLP"],
      challengeSeniorityLevel: "(Senior)",
      challengeTimeline: "40 days",
    },
  ];
  return (
    <div className={`${workSans.className} container mx-auto`}>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Explore challenges & Hackathons
        </h1>
        <h1 className="text-center text-[#687588] my-3">
          Join Skills Challenges Program to accelerate your career growth and
          become
          <span className="ssm:block">
            part of Africa's largest workforce of digital professionals
          </span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 xmd:gap-0 lg:gap-10 my-10">
          {challenges.slice(0, 3).map((challenge) => (
            <ChallengeComponent
              key={challenge.challengeId}
              challenge={challenge}
            />
          ))}
        </div>
        {challenges.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => router.push("/Challenge_and_Hackthons")}
              className={`border border-blue-500 text-[#2B71F0] hover:text-white font-lato hover:bg-blue-600 transition-colors duration-500 font-bold py-2 px-7 rounded`}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
