import Image from "next/image";

export default function ChallengeComponent({ challenge }) {
  return (
    <div className="w-[332.8px] h-[444.8px] p-3 border-[1px] rounded-lg border-[#E4E7EC]">
      {/* Header Section */}
      <div className="relative w-full h-32 mb-4">
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={challenge.challengeImage}
            alt="Challenge banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <span className="absolute top-2 right-2 text-white bg-green-500  text-sm font-semibold px-5 py-1 rounded-full">
          Open
        </span>
      </div>

      {/* Challenge Details */}
      <h1 className="text-xl font-semibold text-gray-900  mb-2 truncate">
        {challenge.challengeName}
      </h1>

      <div className="mb-4">
        <h2 className="text-sm font-medium text-black mb-1">Skills Needed:</h2>
        <div className="flex flex-wrap gap-2">
          {challenge.challengeSkills.map((skill, index) => (
            <span
              key={index}
              className="border-blue-500 text-blue-700 border-2 text-xs font-medium px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-medium mb-1">
          Seniority Levels:
          <span className="text-sm text-gray-800 font-[400] inline-block truncate w-full overflow-hidden whitespace-nowrap align-middle">
            {challenge.challengeSeniorityLevel}
          </span>
        </h2>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-medium  mb-1">
          {"Timeline: "}
          <span className="text-sm inline-block text-gray-800 font-[400]">
            {challenge.challengeTimeline}
          </span>
        </h2>
      </div>
      <hr className="my-4 border-t border-[#E4E7EC] " />

      <button className="bg-blue-500 text-white font-lato hover:bg-blue-600  font-bold py-2 px-4 rounded">
        View Challenge
      </button>
    </div>
  );
}
