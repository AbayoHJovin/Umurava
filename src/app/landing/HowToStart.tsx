import workSans from "@/fonts/fonts";
import StartingSteps from "./components/StartingSteps";

export default function HowToStart() {
  const theFirstTwoSteps = [
    {
      number: 1,
      stepName: "Sign up on Umurava Platform",
      subName: "Submit your completed project for evaluation",
      image: "/svg/signup.svg",
    },
    {
      number: 2,
      stepName: "Browse Open Challenges",
      subName:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.",
      image: "/svg/browseSkills.svg",
    },
  ];

  const theLastSteps = [
    {
      number: 3,
      stepName: "Register and Participate",
      subName: "Sign up for the challenge and start working on the project.",
    },
    {
      number: 4,
      stepName: "Submit your work",
      subName: "Submit your completed project for evaluation.",
    },
    {
      number: 5,
      stepName: "Receive Feedback and Recognition",
      subName: "Get feedback on your work and celebrate your achievements.",
    },
  ];

  return (
    <div className={`bg-[#F9FAFB] ${workSans.className}`}>
      <div className=" py-10 px-4 container mx-auto">
        <h1 className="text-black text-2xl md:text-4xl font-bold text-center my-12 ">
          How to Get Started
        </h1>
        <div className="grid lg:grid-cols-2 gap-3">
          {/* Column 1 */}
          <div className="flex flex-col justify-between gap-3">
            {theFirstTwoSteps.map((step) => (
              <div key={step.number} className="flex-1 flex flex-col">
                <StartingSteps step={step} />
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col justify-between gap-3">
            {theLastSteps.map((step, index) => (
              <div key={step.number} className={`flex-1 flex flex-col`}>
                <StartingSteps step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
