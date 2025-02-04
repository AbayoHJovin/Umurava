"use client";
import Navbar from "@/components/Navbar";
import Breadcrumb from "./BreadCrumb";
import Footer from "@/components/Footer";
import ChallengeComponent from "@/components/ChallengeComponent";
import { useMemo } from "react";
import allChallenges from "@/constants/challenges";
export default function ChallengesAndHackthons() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <Navbar currentPage="Challenge & Hackthons" />

      <div className="flex-1 xmd:px-10 llg:px-40 mt-10 space-y-10">
        <Breadcrumb />
        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-10">
          {allChallenges.map((challenge, index) => (
            <ChallengeComponent
              detailsUrl="talent/challenges"
              key={index}
              challengeImage={challenge.challengeImage}
              challengeId={challenge.challengeId}
              challengeName={challenge.challengeName}
              challengeStatus={challenge.challengeStatus}
              challengeSkills={challenge.challengeSkills}
              challengeTimeline={challenge.challengeTimeline}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
