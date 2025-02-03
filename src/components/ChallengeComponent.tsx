"use client";
import workSans from "@/fonts/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Challenge {
  challengeId: string;
  challengeStatus: string;
  challengeImage: string;
  challengeName: string;
  challengeSkills: string[];
  challengeSeniorityLevel: string;
  challengeTimeline: string;
}

interface ChallengeComponentProps {
  challenge: Challenge;
}

export default function ChallengeComponent({
  challenge,
}: ChallengeComponentProps) {
  return (
    <div
      className={`w-full max-w-[400px] p-4 border border-[#E4E7EC] rounded-lg flex flex-col justify-between ${workSans.className}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] mb-4 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={challenge.challengeImage}
          alt="Challenge banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <span
          className={`absolute ${
            challenge.challengeStatus === "open"
              ? "bg-[#0F973D]"
              : challenge.challengeStatus === "ongoing"
              ? "bg-orange-500"
              : "bg-red-500"
          } top-2 right-2 text-white text-sm font-semibold px-3 py-1 rounded-full`}
        >
          {challenge.challengeStatus}
        </span>
      </div>

      {/* Challenge Details */}
      <div className="flex-grow">
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 truncate">
          {challenge.challengeName}
        </h1>

        <div className="mb-4">
          <h2 className="text-sm font-medium text-black mb-1">
            Skills Needed:
          </h2>
          <div className="flex flex-wrap gap-2">
            {challenge.challengeSkills.map((skill, index) => (
              <span
                key={index}
                className="border-blue-500 text-blue-700 border px-3 py-1 text-xs md:text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-medium mb-1">Seniority Levels:</h2>
          <span className="text-sm text-gray-800 font-normal block truncate">
            {challenge.challengeSeniorityLevel}
          </span>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-medium mb-1">Timeline:</h2>
          <span className="text-sm text-gray-800 font-normal block truncate">
            {challenge.challengeTimeline}
          </span>
        </div>
      </div>

      <hr className="my-4 border-t border-[#E4E7EC]" />

      {/* Button Section */}
      <div className="flex justify-start">
        <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded text-center">
          View Challenge
        </button>
      </div>
    </div>
  );
}
