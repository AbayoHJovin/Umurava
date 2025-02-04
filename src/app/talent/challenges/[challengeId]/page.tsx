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
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import allChallenges from "@/constants/challenges";
import { ChallengeProps } from "@/types/challengeProps";
import { isChallengeProps } from "@/functions/checkChallenge";
import Link from "next/link";

export default function Details() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [challenge, setChallenge] = useState<ChallengeProps | null>(null);
 const router=useRouter();
  const params = useParams();
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
 
  return (
    <div className={`flex ${workSans.className}`}>
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
      <div className="ml-0 md:ml-20 lg:ml-[20%] w-full transition-all duration-300">
        <div className="border-b-2 border-gray-300">
          <TopBar
            profileImageUrl="/sf.png"
            onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
          />
        </div>
        <div className="flex gap-6 items-center ps-10 py-6 flex-wrap">
          <div className="border border-gray-200 hover:bg-gray-100 duration-500 rounded-md px-4 py-4">
            <HiArrowSmallLeft />
          </div>
          <p onClick={()=>router.back()} className="text-gray-600 text-xl truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            Go Back
          </p>
          <Link href={"/talent/challenges"} className="text-gray-400 text-xl truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            Challenges & Hackathons
          </Link>

          <a
            href={`/talent/challenges/${challengeId}`}
            className="text-[#2B71F0] text-xl truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            {challenge?.challengeName}
          </a>
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
          <div className="w-full llg:w-[38%]">
            <div className="border-2 border-gray-200 rounded-xl px-8 py-10 space-y-6">
              <h1 className="text-2xl text-gray-800 font-bold">
                Key Instructions:
              </h1>
              <p className="text-gray-600 text-xl pb-4">
                You are free to schedule the clarification call with the team
                via this
              </p>
              <div className="space-y-6">
                <Instructions
                  icon={<IoMailOutline size={30} />}
                  title="talent@umurava.africa"
                  description="Contact Email"
                />
                <Instructions
                  icon={<BiBriefcase size={30} />}
                  title={challenge?.challengeCategory || ""}
                  description="Challenge Category"
                />
                <Instructions
                  icon={<FaRegCalendarAlt size={30} />}
                  title={challenge?.challengeTimeline || ""}
                  description="Duration"
                />
                <Instructions
                  icon={<AiOutlineDollar size={30} />}
                  title={challenge?.challengePrize || ""}
                  description="Money Prize"
                />
              </div>
              <div className="py-6">
                <button className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-xl px-10 py-6 text-white text-xl font-medium w-full">
                  Submit your work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Instructions: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4" title={title}>
      <div className="bg-[#D0E0FC] text-[#2B71F0] rounded-full px-3 py-3">
        {icon}
      </div>
      <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl truncate">
        <p className="text-2xl font-semibold text-gray-800 truncate">{title}</p>
        <p className="text-xl text-gray-600 truncate">{description}</p>
      </div>
    </div>
  );
};
