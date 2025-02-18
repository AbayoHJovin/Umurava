"use client";

import { SlArrowRight } from "react-icons/sl";
import Challenges from "@/components/ChallengeComponent";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import AdminChallengeCard from "@/components/adminChallengeCard";
import { TiDocumentText } from "react-icons/ti";
import { useState } from "react";
import allChallenges from "@/constants/challenges";
import currentUser from "@/constants/currentUser";
export default function AdminDashboard() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        profileImageUrl={currentUser.profileImage}
        href={[
          "/admin",
          "admin/challenges",
          "admin/settings",
          "admin/help",
          "admin/family",
        ]}
      />

      <SideBar
        profileImageUrl={currentUser.profileImage}
        href={[
          "/admin",
          "admin/challenges",
          "admin/settings",
          "admin/help",
          "admin/family",
        ]}
        mobile
        mobileSidebarOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />
      {/* <div className="ml-[20%] "> */}
      <div className="ml-0 md:ml-20 lg:ml-[20%] w-full transition-all duration-300">
        <TopBar
          profileImageUrl={currentUser.profileImage}
          onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
        />
        <div className="bg-[#F9FAFB] py-6 ps-10 pe-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl text-gray-800 font-bold">
                Welcome back {currentUser.username},{" "}
              </h1>
              <p className="text-gray-500 font-normal text-xl">
                Build Work Experience Through Skills Challenges
              </p>
            </div>
          </div>
          <div className="flex flex-col xmd:flex-row gap-6 py-6 w-full">
            <AdminChallengeCard
              // width="100"
              title="Total Challenges"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              // width="100"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
          </div>
          <div className="flex flex-col llg:flex-row gap-6 py-6">
            <AdminChallengeCard
              // width="100"
              title="Total Challenges"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              // width="100"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              // width="100"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
          </div>

          <div className="flex justify-between py-6">
            <p className="text-xl font-medium "> Recent Challenges</p>
            <div className="text-[#2B71F0] flex justify-between items-center gap-2">
              <p className="font-medium">See all</p>
              <SlArrowRight />
            </div>
          </div>
                    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-6">
            {allChallenges.map((challenge, index) => (
              <Challenges
              detailsUrl="/admin/challenges"
                key={index}
                challengeImage={challenge.challengeImage}
                challengeId={challenge.challengeId}
                challengeName={challenge.challengeName}
                challengeStatus={challenge.challengeStatus}
                challengeSkills={challenge.challengeSkills}
                challengeTimeline={challenge.challengeTimeline}
                challengeComponentWidth="100"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
