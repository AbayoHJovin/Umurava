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
    <div className="relative bg-white p-4 rounded-lg">
      {/* Step Button */}
      <button className="bg-[#2B71F0] text-white p-2 px-3 rounded-md">
        step {step.number}
      </button>

      {/* Step Name */}
      <h1 className="text-black text-2xl font-bold">{step.stepName}</h1>

      {/* Sub Name */}
      <h1 className="text-[#000000] text-lg">{step.subName}</h1>

      {/* Image Positioned in Bottom-Right */}
      {step.image && (
        <div className="absolute bottom-2 right-2">
          <Image
            src={step.image}
            objectFit="cover"
            width={200} // Adjust width
            height={200} // Adjust height
            alt="step image"
          />
        </div>
      )}
    </div>
  );
}
