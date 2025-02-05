"use client";
import Image from "next/image";
import Link from "next/link";

interface ChallengesProps {
    challengeId: string,
    challengeStatus: string,
    challengeImage: string,
    challengeName: string,
    challengeSkills: string[],
    challengeTimeline: string,
    challengeComponentWidth?: string,
    detailsUrl: string,
    challenge?: unknown
}

export default function Challenges({
                                       challengeId,
                                       challengeName,
                                       challengeTimeline,
                                       challengeStatus,
                                       challengeSkills = [],
                                       challengeImage,
                                       challengeComponentWidth = '100',
                                       detailsUrl,
                                       challenge
                                   }: ChallengesProps) {
    return (
        <div
            className={`border-2 border-gray-200 rounded-xl px-6 w-[${challengeComponentWidth}%]`}
        >
            <div className="space-y-6 border-b-2 border-gray-200 py-6">
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
                        <SkillsButton key={index} skill={skill}/>
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

const SkillsButton: React.FC<{ skill: string }> = ({skill}) => {
    return (
        <button
            title={skill}
            className="border-2 border-[#2B71F0] py-2 px-2 rounded-2xl text-[#2B71F0] font-medium truncate max-w-[100px]"
        >
            {skill}
        </button>
    );
};
