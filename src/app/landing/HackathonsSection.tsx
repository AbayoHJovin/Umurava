"use client";
import ChallengeComponent from "@/components/ChallengeComponent";
import workSans from "@/fonts/fonts";
import { useRouter } from "next/navigation";
import allChallenges from "@/constants/challenges";

export default function HackathonsSection() {
  const router = useRouter();
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
          {allChallenges.slice(0, 3).map((challenge, index) => (
            <div className="w-[25%]" key={index}>
              <ChallengeComponent
                challengeImage={challenge.challengeImage}
                challengeId={challenge.challengeId}
                challengeName={challenge.challengeName}
                challengeStatus={challenge.challengeStatus}
                challengeSkills={challenge.challengeSkills}
                challengeTimeline={challenge.challengeTimeline}
              />
            </div>
          ))}
        </div>
        {allChallenges.length > 3 && (
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
