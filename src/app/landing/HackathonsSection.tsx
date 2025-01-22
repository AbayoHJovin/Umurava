import ChallengeComponent from "@/components/ChallengeComponent";

export default function HackathonsSection() {
  const challenges = [
    {
      challengeId: "1",
      challengeStatus: "Open",
      challengeImage: "/challengeImage.png",
      challengeName: "Design Dashboard for SokoFund",
      challengeSkills: ["UI/UX Design", "User Research", "User Research"],
      challengeSeniorityLevel: "(Junior,Intermediate,Senior)",
      challengeTimeline: "15 days",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Explore challenges & Hackathons
        </h1>
        <h1 className="text-center text-[#687588] my-3">
          Join Skills Challenges Program to accelerate your career growth and
          become
          <span className="ssm:block">
            part of Africa's largest workforce of digital professionals
          </span>
        </h1>
        {
            challenges.length && challenges.map((challenge)=>(
                <ChallengeComponent challenge={challenge}/>
            ))
        }
      </div>
    </div>
  );
}
