// "use client";
// import Navbar from "@/components/Navbar";
// import Breadcrumb from "./BreadCrumb";
// import Footer from "@/components/Footer";
// import ChallengeComponent from "@/components/ChallengeComponent";
// import { useEffect } from "react";

// export default function ChallengesAndHackthons() {
//   const challenge = {
//     challengeId: "1",
//     challengeStatus: "Open",
//     challengeImage: "/challengeImage.png",
//     challengeName:
//       "Design Dashboard for SokoFund which is the largest business",
//     challengeSkills: ["UI/UX Design", "User Research", "User Research"],
//     challengeSeniorityLevel: "(Junior,Intermediate,Senior)",
//     challengeTimeline: "15 days",
//   };
//   const challenges = [];
//   for (let i = 0; i <= 10; i++) {
//     challenges.push(challenge);
//   }
//   return (
//     <div className="bg-[#F9FAFB]">
//       <Navbar currentPage="Challenge & Hackthons" />
//       <div className="space-y-10 mt-10">
//         <Breadcrumb />
//         <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 items-center gap-5 my-10 mx-auto container justify-center">
//           {challenges.map((challenge, index) => (
//             <ChallengeComponent key={index} challenge={challenge} />
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

"use client";
import Navbar from "@/components/Navbar";
import Breadcrumb from "./BreadCrumb";
import Footer from "@/components/Footer";
import ChallengeComponent from "@/components/ChallengeComponent";
import { useMemo } from "react";

// Define the challenge data outside the component
const challenge = {
  challengeId: "1",
  challengeStatus: "Open",
  challengeImage: "/challengeImage.png",
  challengeName: "Design Dashboard for SokoFund which is the largest business",
  challengeSkills: ["UI/UX Design", "User Research", "User Research"],
  challengeSeniorityLevel: "(Junior,Intermediate,Senior)",
  challengeTimeline: "15 days",
};

export default function ChallengesAndHackthons() {
  // Memoize the challenges array to avoid recreating it on every render
  const challenges = useMemo(() => {
    return Array.from({ length: 11 }, () => challenge);
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      {/* Navbar with consistent horizontal padding */}
      <Navbar currentPage="Challenge & Hackthons" />

      {/* Main content container with consistent horizontal padding */}
      <div className="flex-1 xmd:px-10 llg:px-40 mt-10 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Challenge grid with consistent horizontal padding and gap between items */}
        <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-5">
          {challenges.map((challenge, index) => (
            <ChallengeComponent key={index} challenge={challenge} />
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
