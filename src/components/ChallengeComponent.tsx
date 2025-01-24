"use client";
import workSans from "@/fonts/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ChallengeComponent({ challenge }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Tailwind's lg breakpoint
    };

    // Set the initial state
    handleResize();

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full md:w-[250px] lg:w-[332.8px] h-auto md:h-[500px] p-4 border-[1px] rounded-lg border-[#E4E7EC] flex flex-col justify-between ${workSans.className}`}
    >
      {/* Header Section */}
      <div className="relative w-full h-40 mb-4">
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={challenge.challengeImage}
            alt="Challenge banner"
            width={300}
            height={160}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <span className="absolute top-2 right-2 text-white bg-green-500 text-sm font-semibold px-4 py-1 rounded-full truncate">
          Open
        </span>
      </div>

      {/* Challenge Details */}
      <div className="flex-grow">
        <h1 className="text-xl font-semibold text-gray-900 mb-2 truncate">
          {challenge.challengeName}
        </h1>

        <div className="mb-4">
          <h2 className="text-sm font-medium text-black mb-1">
            Skills Needed:
          </h2>
          <div className="flex flex-wrap gap-2">
            {challenge.challengeSkills
              .slice(0, isLargeScreen ? 2 : challenge.challengeSkills.length)
              .map((skill: string, index: number) => (
                <span
                  key={index}
                  className="border-blue-500 text-blue-700 border-2 text-xs font-medium px-2 py-1 rounded-full truncate max-w-full"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-medium mb-1">
            Seniority Levels:
            <span className="text-sm text-gray-800 font-normal block truncate">
              {challenge.challengeSeniorityLevel}
            </span>
          </h2>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-medium mb-1">
            Timeline:
            <span className="text-sm text-gray-800 font-normal block truncate">
              {challenge.challengeTimeline}
            </span>
          </h2>
        </div>
      </div>

      <hr className="my-4 border-t border-[#E4E7EC]" />

      {/* Button Section */}
      <div className="flex justify-start">
        <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded">
          View Challenge
        </button>
      </div>
    </div>
  );
}
