import workSans from "@/fonts/fonts";
import Image from "next/image";

type PropsDef = {
  number: number;
  stepName: string;
  subName: string;
  image?: string;
};

type Props = {
  step: PropsDef;
};

export default function StartingSteps({ step }: Props) {
  return (
    <div
      className={`relative bg-white  p-6 rounded-lg flex flex-col justify-between h-full  ${workSans.className}`}
    >
      <button className="bg-[#2B71F0] text-white text-sm font-medium py-1 px-3 rounded-md self-start">
        Step {step.number}
      </button>

      <h1 className="text-black text-lg font-bold mt-4">{step.stepName}</h1>

      <p className="text-gray-600 text-sm mt-2">{step.subName}</p>

      {step.image && (
        <div className="mt-auto flex justify-end items-end">
          <object
            type="image/svg+xml"
            data={step.image}
            width={150}
            height={100}
          ></object>
        </div>
      )}
    </div>
  );
}
