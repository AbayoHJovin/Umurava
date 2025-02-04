import { ChallengeProps } from "@/types/challengeProps";

interface ChallengeDetailsProps {
  challenge: ChallengeProps | null;
}

export default function ChallengeDetails({ challenge }: ChallengeDetailsProps) {
  if (!challenge) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-6 pe-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Project Brief : {challenge.challengeName}
      </h1>
      <p className="text-gray-600 text-xl">{challenge.challengeDescription}</p>
      <p className="text-2xl font-semibold text-gray-800">Task:</p>
      <ChallengeDetailsItems
        productRequirements={challenge.challegeRequirements ?? []}
        productDesign={challenge.productDesign ?? []}
        deliverables={challenge.derivables ?? []}
        challengeNote={challenge.note ?? []}
      />
    </div>
  );
}

const ChallengeDetailsItems: React.FC<{
  productRequirements: string[];
  productDesign: string[];
  deliverables: string[];
  challengeNote: string[];
}> = ({ productRequirements, productDesign, deliverables, challengeNote }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product Requirements
        </h1>
        <div>
          {productRequirements.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item text-gray-600 text-xl mb-4">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product Design:
        </h1>
        <div>
          {productDesign.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item text-gray-600 text-xl mb-4">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Deliverables:</h1>
        <div>
          {deliverables.map((item, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item text-gray-600 text-xl mb-4">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">NOTE:</h1>
        <div>
          {challengeNote.map((note, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="list-item text-gray-600 text-xl mb-4">{note}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
