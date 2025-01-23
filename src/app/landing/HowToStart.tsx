import StartingSteps from "./components/StartingSteps";

export default function HowToStart() {
  const steps = [
    {
      number: 1,
      stepName: "Signup on Umurava Platform",
      subName: "Submit your completed project for evaluation",
      image: "/signup.png",
    },
    {
      number: 2,
      stepName: "Browse open Challenges",
      subName:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.",
      image: "",
    },
    {
      number: 3,
      stepName: "Register and Participate",
      subName: "Signup for the Challenge and start working on the project",
    },
    {
      number: 4,
      stepName: "Submit your work",
      subName: "Submit your completed project for evaluation",
    },
    {
      number: 5,
      stepName: "Receive feedback and Recognition",
      subName: "Get feedback on your work and celebrate your achievements.",
    },
  ];
  return (
    <div className="bg-[#F9FAFB]">
      <h1 className="text-black text-4xl font-bold text-center ">
        How to Get Started
      </h1>
      <div className="my-5">
        {steps.map((step) => (
          <div className="grid">
            <StartingSteps step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}
