// "use client";
// import workSans from "@/fonts/fonts";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface Challenge {
//   challengeId: string;
//   challengeStatus: string;
//   challengeImage: string;
//   challengeName: string;
//   challengeSkills: string[];
//   challengeSeniorityLevel: string;
//   challengeTimeline: string;
// }

// interface ChallengeComponentProps {
//   challenge: Challenge;
// }

// export default function ChallengeComponent({
//   challenge,
// }: ChallengeComponentProps) {
//   return (
//     <div
//       className={`w-full max-w-[400px] p-4 border border-[#E4E7EC] rounded-lg flex flex-col justify-between ${workSans.className}`}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] mb-4 rounded-lg overflow-hidden bg-gray-100">
//         <Image
//           src={challenge.challengeImage}
//           alt="Challenge banner"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//         <span
//           className={`absolute ${
//             challenge.challengeStatus === "open"
//               ? "bg-[#0F973D]"
//               : challenge.challengeStatus === "ongoing"
//               ? "bg-orange-500"
//               : "bg-red-500"
//           } top-2 right-2 text-white text-sm font-semibold px-3 py-1 rounded-full`}
//         >
//           {challenge.challengeStatus}
//         </span>
//       </div>

//       {/* Challenge Details */}
//       <div className="flex-grow">
//         <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 truncate">
//           {challenge.challengeName}
//         </h1>

//         <div className="">
//           <h2 className="text-xl font-medium text-black mb-1">
//             Skills Needed:
//           </h2>
//           <div className="flex flex-wrap gap-2">
//             {challenge.challengeSkills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="border-blue-500 text-blue-700 border px-3 py-1 text-xs md:text-sm font-medium rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-sm font-medium mb-1">Seniority Levels:</h2>
//           <span className="text-sm text-gray-800 font-normal block truncate">
//             {challenge.challengeSeniorityLevel}
//           </span>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-sm font-medium mb-1">Timeline:</h2>
//           <span className="text-sm text-gray-800 font-normal block truncate">
//             {challenge.challengeTimeline}
//           </span>
//         </div>
//       </div>

//       <hr className="my-4 border-t border-[#E4E7EC]" />

//       {/* Button Section */}
//       <div className="flex justify-start">
//         <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded text-center">
//           View Challenge
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

interface ChallengesProps {
  challengeId: string;
  challengeStatus: string;
  challengeImage: string;
  challengeName: string;
  challengeSkills: string[];
  challengeTimeline: string;
  challengeComponentWidth?: string;
  detailsUrl: string;
}

export default function Challenges({
  challengeId,
  challengeName,
  challengeTimeline,
  challengeStatus,
  challengeSkills = [],
  challengeImage,
  challengeComponentWidth,
  detailsUrl,
}: ChallengesProps) {
  return (
    <div
      className={`border-2 border-gray-200 rounded-xl px-6 w-[${challengeComponentWidth}%]`}
    >
      <div className="space-y-6 border-b-2 border-gray-200 py-6 ">
        <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={challengeImage}
            alt="Challenge banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <span
            className={`absolute ${
              challengeStatus === "open"
                ? "bg-[#0F973D]"
                : challengeStatus === "ongoing"
                ? "bg-orange-500"
                : "bg-red-500"
            } top-2 right-2 text-white text-sm font-semibold px-3 py-1 rounded-full`}
          >
            {challengeStatus}
          </span>
        </div>

        <Link
          title={challengeName}
          href={`${detailsUrl}/${challengeId}`}
          className="text-2xl font-semibold text-gray-800 truncate block overflow-hidden whitespace-nowrap"
        >
          {challengeName}
        </Link>
        <p className="font-medium">Skills needed:</p>
        <div className="flex gap-4">
          {challengeSkills.map((skill, index) => (
            <SkillsButton key={index} skill={skill} />
          ))}
        </div>
        <p>
          <span className="font-medium">Seniority Level:</span>{" "}
          <span className="font-medium text-gray-500">
            (Junior, Intermediate , Senior)
          </span>
        </p>
        <p>
          <span className="font-medium">Timeline:</span>{" "}
          <span className="font-medium text-gray-500">
            {challengeTimeline} Days
          </span>
        </p>
      </div>
      <div className="py-6">
        <Link
          href={`${detailsUrl}/${challengeId}`}
          className="bg-[#2B71F0] text-white font-medium px-3 py-3 rounded-md border-t-2 border-gray-200"
        >
          View Challenge
        </Link>
      </div>
    </div>
  );
}

const SkillsButton: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <button
      title={skill}
      className="border-2 border-[#2B71F0] py-2 px-2 rounded-2xl text-[#2B71F0] font-medium truncate max-w-[100px]"
    >
      {skill}
    </button>
  );
};
