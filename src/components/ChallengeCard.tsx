import { TiDocumentText } from "react-icons/ti";

interface ChallengeCardProps {
  title: string;
  number: string;
}

export default function ChallengeCard({ title, number }: ChallengeCardProps) {
  return (
    <div className="border-2 border-gray-200 rounded-xl px-8 py-6 w-full">
      <div className="flex justify-between items-center gap-2">
        <div className="border-s-8 border-[#2B71F0] rounded-md p-2">
          <p className="text-[#344054] font-medium">{title}</p>
          <h2 className="text-[#344054] text-xl font-bold">{number}</h2>
        </div>
        <TiDocumentText
          className="text-[#2B71F0] flex sm:hidden xmd:flex bg-[#D0E0FC] rounded-full py-2 px-2"
          size={40}
        />
      </div>
    </div>
  );
}
