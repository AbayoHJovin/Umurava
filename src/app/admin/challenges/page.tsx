"use client";

import ChallengeCategoryCard from "@/components/ChallengeCategoriesCard";
import ChallengeComponent from "@/components/ChallengeComponent";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import allChallenges from "@/constants/challenges";
import { FaChevronDown } from "react-icons/fa";

export default function AdminChallenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [categories, setCategories] = useState([
    { category: "All Challenges", number: 0 },
    { category: "Completed Challenges", number: 0 },
    { category: "Open Challenges", number: 0 },
    { category: "Ongoing Challenges", number: 0 },
  ]);

  useEffect(() => {
    const counts = {
      "All Challenges": allChallenges.length,
      "Completed Challenges": allChallenges.filter(
        (challenge) => challenge.challengeStatus === "completed"
      ).length,
      "Open Challenges": allChallenges.filter(
        (challenge) => challenge.challengeStatus === "open"
      ).length,
      "Ongoing Challenges": allChallenges.filter(
        (challenge) => challenge.challengeStatus === "ongoing"
      ).length,
    };

    setCategories(
      categories.map((category) => ({
        ...category,
        number: counts[category.category as keyof typeof counts] || 0,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allChallenges]);

  const filteredChallenges = allChallenges.filter((challenge) => {
    if (categories[activeIndex].category === "All Challenges") {
      return true;
    }
    if (categories[activeIndex].category === "Completed Challenges") {
      return challenge.challengeStatus === "completed";
    }
    if (categories[activeIndex].category === "Open Challenges") {
      return challenge.challengeStatus === "open";
    }
    if (categories[activeIndex].category === "Ongoing Challenges") {
      return challenge.challengeStatus === "ongoing";
    }
    return false;
  });

  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        profileImageUrl="/sf.png"
        href={[
          "/admin",
          "/admin/challenges",
          "/admin/settings",
          "/admin/help",
          "/admin/family",
        ]}
      />

      <SideBar
        profileImageUrl="/sf.png"
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
      <div className="ml-0 md:ml-20 lg:ml-[20%] w-full transition-all duration-300">
        <TopBar
          profileImageUrl="/sf.png"
          onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
        />{" "}
        <div className="bg-[#F9FAFB] py-6 px-10">
          <div>
            <h1 className="text-3xl text-gray-800 font-bold">Challenges</h1>
            <p className="text-gray-500 font-normal text-xl">
              Join a challenge or a hackathon to gain valuable work experience,
            </p>
          </div>
          <div className="flex flex-col xlg:flex-row gap-4 items-start xlg:items-center border-b-2 border-gray-100 py-6">
            <div className="py-6 border-b-2 border-gray-100">
              <div className="hidden llg:flex gap-4">
                {categories.map((item, index) => (
                  <ChallengeCategoryCard
                    key={index}
                    category={item.category}
                    number={item.number}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <div className="llg:hidden relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex justify-between items-center px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-700 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>
                    {categories[activeIndex].category} (
                    {categories[activeIndex].number})
                  </span>
                  <FaChevronDown className="text-gray-500" />
                </button>
                <div
                  className={`absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 transform transition-all duration-200 origin-top ${
                    isDropdownOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 cursor-pointer transition-colors duration-200 ${
                        activeIndex === index
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.category} ({item.number})
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href=""
              className="bg-[#2B71F0] hover:bg-blue-700 rounded-xl text-white font-medium px-6 py-4 flex gap-4 items-center"
            >
              <GoPlus size={30} />
              <p>Create New Challenge</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-5 mt-6">
            {filteredChallenges.map((challenge, index) => (
              <ChallengeComponent
              detailsUrl="/admin/challenges"
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
          <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-4">
            <button className="text-[#98A2B3] rounded-xl py-3 px-12 bg-white">
              Previous
            </button>
            <button className="text-white rounded-xl py-3 px-12 bg-[#2B71F0]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
