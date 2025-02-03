"use client";

import ChallengeCard from "@/components/ChallengeCard";
import { IoEyeOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import workSans from "@/fonts/fonts";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import ChallengeComponent from "@/components/ChallengeComponent";
import { useState } from "react";

export default function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const challenges = [
    {
      challengeId: "2",
      challengeStatus: "open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
    {
      challengeId: "2",
      challengeStatus: "open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
    {
      challengeId: "2",
      challengeStatus: "open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
    {
      challengeId: "2",
      challengeStatus: "open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
    {
      challengeId: "2",
      challengeStatus: "open",
      challengeImage: "/challengeImage.png",
      challengeName: "Create a Social Media App",
      challengeSkills: ["React", "Firebase", "UI Design"],
      challengeSeniorityLevel: "(Intermediate, Senior)",
      challengeTimeline: "30 days",
    },
  ];

  return (
    <div className={`flex ${workSans.className}`}>
      {/* Desktop Sidebar: visible on md and above */}
      <SideBar
        profileImageUrl="/sf.png"
        href={[
          "/challenges",
          "/challenges/challengesTab",
          "/settings",
          "/help",
          "/family",
        ]}
      />

      {/* Mobile Sidebar: visible on small screens when toggled */}
      <SideBar
        profileImageUrl="/sf.png"
        href={[
          "/challenges",
          "/challenges/challengesTab",
          "/settings",
          "/help",
          "/family",
        ]}
        mobile
        mobileSidebarOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      <div className="flex-1 ml-0 md:ml-20 lg:ml-[20%] transition-all duration-300 items-center">
        <TopBar
          profileImageUrl="/sf.png"
          onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
        />
        <div className="bg-[#F9FAFB] py-6 px-10">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h1 className="text-3xl text-gray-800 font-bold">
                Welcome back Hilaire,
              </h1>
              <p className="text-gray-500 font-normal text-xl">
                Build Work Experience Through Skills Challenges
              </p>
            </div>

            <button className="rounded-md bg-[#2B71F0] hover:bg-blue-700 flex gap-2 items-center text-white text-xl px-6 py-6 mt-4">
              <IoEyeOutline size={25} />
              <span>View Profile</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-12 gap-4">
            <ChallengeCard title="Completed Challenges" number="05" />
            <ChallengeCard title="Open Challenges" number="200" />
            <ChallengeCard title="Ongoing Challenges" number="200" />
          </div>
             
          <div className="flex justify-between items-center py-6">
            <p className="text-xl font-medium">Recent Challenges</p>
            <div className="text-[#2B71F0] flex items-center gap-2">
              <Link href={"/challenges"} className="font-medium">
                See all
              </Link>
              <SlArrowRight />
            </div>
          </div>
          <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-5">
            {challenges.map((challenge, index) => (
              <ChallengeComponent key={index} challenge={challenge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
