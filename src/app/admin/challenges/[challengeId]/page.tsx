"use client";

import ChallengeDetails from "@/components/ChallengeDetails";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { BiBriefcase } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { VscListFilter } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import allChallenges from "@/constants/challenges";
import { ChallengeProps } from "@/types/challengeProps";
import { isChallengeProps } from "@/functions/checkChallenge";
import Link from "next/link";
import currentUser from "@/constants/currentUser";

export default function AdminChallengesDetails() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [challenge, setChallenge] = useState<ChallengeProps | null>(null);
  const router = useRouter();
  const params = useParams();
  const path = usePathname();
  const challengeId = params.challengeId as string;

  useEffect(() => {
    if (challengeId) {
      const oneChallenge = allChallenges.find(
        (ch) => ch.challengeId === challengeId
      );

      // Check if the found challenge matches ChallengeProps
      if (oneChallenge && isChallengeProps(oneChallenge)) {
        setChallenge(oneChallenge);
      } else {
        setChallenge(null); // Fallback if no valid challenge is found
      }
    }
  }, [challengeId]);

  const Participants = [
    {
      participantName: "Joly Mutesi",
      role: "Content Creator",
      profileImageUrl: "/profile.png",
    },
    {
      participantName: "Joly Mutesi",
      role: "Content Creator",
      profileImageUrl: "/profile.png",
    },
    {
      participantName: "Joly Mutesi",
      role: "Content Creator",
      profileImageUrl: "/profile.png",
    },
    {
      participantName: "Joly Mutesi",
      role: "Content Creator",
      profileImageUrl: "/profile.png",
    },
    {
      participantName: "Joly Mutesi",
      role: "Content Creator",
      profileImageUrl: "/profile.png",
    },
  ];

  const Instructions = [
    {
      icon: <IoMailOutline size={30} />,
      title: "talent@umurava.africa",
      description: "Contact Email",
    },
    {
      icon: <BiBriefcase size={30} />,
      title: challenge?.challengeCategory || "",
      description: "Challenge Category",
    },
    {
      icon: <FaRegCalendarAlt size={30} />,
      title: challenge?.challengeTimeline || "",
      description: "Duration",
    },
    {
      icon: <AiOutlineDollar size={30} />,
      title: challenge?.challengePrize || "",
      description: "Money Prize",
    },
  ];

  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        profileImageUrl={currentUser.profileImage}
        href={[
          "/admin",
          "/admin/challenges",
          "/admin/settings",
          "/admin/help",
          "/admin/family",
        ]}
      />

      <SideBar
        profileImageUrl={currentUser.profileImage}
        href={[
          "/admin",
          "/admin/challenges",
          "/admin/settings",
          "/admin/help",
          "/admin/family",
        ]}
        mobile
        mobileSidebarOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* <div className="ml-[20%] w-[80%]"> */}
      <div className="ml-0 md:ml-20 lg:ml-[20%] w-full transition-all duration-300">
        <div className="border-b-2 border-gray-300">
          <TopBar
            profileImageUrl={currentUser.profileImage}
            onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
          />{" "}
        </div>
        <div className="flex flex-col llg:flex-row items-start sm:items-end llg:items-center w-full sm:w-[96%] justify-between gap-4 sm:gap-0 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center ps-4 sm:ps-10 py-4 sm:py-6">
            {/* Arrow Button */}
            <div className="border border-gray-200 hover:bg-gray-100 duration-500 rounded-md px-3 sm:px-4 py-3 sm:py-4 cursor-pointer">
              <HiArrowSmallLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Go Back Text */}
            <p
              onClick={() => router.back()}
              className="text-gray-600 text-lg sm:text-xl cursor-pointer truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
            >
              Go Back
            </p>

            {/* Challenges & Hackathons Link */}
            <Link
              href={"/talent/challenges"}
              className="text-gray-400 text-lg sm:text-xl truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
            >
              Challenges & Hackathons
            </Link>

            {/* Challenge Name Link */}
            <a
              href="/admin/challenges/edit"
              className="text-[#2B71F0] text-lg sm:text-xl font-medium truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
            >
              {challenge?.challengeName}
            </a>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 pb-4 sm:pb-0">
            <div className="flex gap-2 items-center text-lg sm:text-xl text-gray-500">
              <CiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
              <p>Search</p>
            </div>
            <div className="flex gap-2 items-center text-lg sm:text-xl text-gray-500">
              <VscListFilter className="w-5 h-5 sm:w-6 sm:h-6" />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-1 llg:ps-10 flex flex-col mx-5 llg:mx-2 llg:flex-row gap-12 border-t-2 border-gray-200">
          <div className=" w-full llg:w-[55%] border-2 border-gray-200 rounded-xl p-5 md:py-10 md:px-10 space-y-6">
            <div className="bg-[#2B71F0] rounded-xl flex justify-center items-center h-[350px]">
              <Image
                src="/logo.png"
                alt="Umurava logo"
                width={100}
                height={100}
              />
            </div>
            <div>
              <ChallengeDetails challenge={challenge || null} />
            </div>
          </div>

          <div className="w-full llg:w-[38%] space-y-12">
            {/* <div className="bg-[#F9FAFB] py-12 ps-1 w-full llg:ps-10 flex flex-col mx-5 llg:mx-2 llg:flex-row gap-12 border-t-2 border-gray-200"> */}
            <div className="border-2 border-gray-200 rounded-xl px-8 py-10 space-y-6">
              <h1 className="text-2xl text-gray-800 font-bold">
                Key Instructions:
              </h1>
              <p className="text-gray-600 text-xl pb-4">
                You are free to schedule the clarification call with the team
                via this
              </p>
              <div className="space-y-6 w-[100%]">
                {Instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    title={instruction.title}
                  >
                    <div className="bg-[#D0E0FC] text-[#2B71F0] rounded-full px-3 py-3">
                      {instruction.icon}
                    </div>
                    <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl truncate">
                      <p className="text-2xl font-semibold text-gray-800 truncate">
                        {instruction.title}
                      </p>
                      <p className="text-xl text-gray-600 truncate">
                        {instruction.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-8">
                  <button className="bg-red-500 hover:bg-red-700 transition duration-300 rounded-xl px-12 py-4 text-white text-lg font-medium w-full sm:w-auto sm:px-10 sm:py-6">
                    Delete
                  </button>
                  <Link
                    href={`/admin/challenges/${challengeId}`}
                    className="bg-[#2B71F0] hover:bg-blue-700 transition duration-300 rounded-xl px-12 py-4 text-white text-lg font-medium w-full sm:w-auto sm:px-10 sm:py-6 text-center"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-xl px-8">
              <div className="border-b-2 border-gray-100 mx-[-2rem] w-[113%] ps-8 flex flex-col sssm:flex-row items-center gap-3 py-8">
                <p className="text-2xl text-gray-700 font-bold ">
                  Participants
                </p>
                <p className="bg-[#2B71F0] text-white px-4 rounded-xl">250</p>
              </div>

              {Participants.map((participant, index) => (
                <div
                  key={index}
                  className="py-8 border-b-2 border-gray-100 mx-[-2rem] w-[113%] ps-8 flex items-center gap-3"
                >
                  <Image
                    src={participant.profileImageUrl}
                    alt="Umurava logo"
                    width={50}
                    height={50}
                  />
                  <div className="">
                    <p className="text-xl text-gray-700 font-medium ">
                      {participant.participantName}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {participant.role}
                    </p>
                  </div>
                </div>
              ))}

              <div className="py-6">
                <button className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-xl px-10 py-6 text-white text-xl font-medium w-full">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
