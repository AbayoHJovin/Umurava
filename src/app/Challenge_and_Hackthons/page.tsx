"use client";
import Navbar from "@/components/Navbar";
import Breadcrumb from "./BreadCrumb";
import Footer from "@/components/Footer";
import ChallengeComponent from "@/components/ChallengeComponent";
import { useEffect } from "react";

export default function ChallengesAndHackthons() {
  const challenge = {
    challengeId: "1",
    challengeStatus: "Open",
    challengeImage: "/challengeImage.png",
    challengeName:
      "Design Dashboard for SokoFund which is the largest business",
    challengeSkills: ["UI/UX Design", "User Research", "User Research"],
    challengeSeniorityLevel: "(Junior,Intermediate,Senior)",
    challengeTimeline: "15 days",
  };
  const challenges = [];
  //   useEffect(() => {
  for (let i = 0; i <= 10; i++) {
    challenges.push(challenge);
  }
  //   }, []);
  return (
    <div className="bg-[#F9FAFB]">
      <Navbar currentPage="Challenge & Hackthons" />
      <div className="space-y-10 mt-10">
        <Breadcrumb />
        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 items-center gap-5 my-10 mx-auto container justify-center">
          {challenges.map((challenge, index) => (
            <ChallengeComponent key={index} challenge={challenge} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
