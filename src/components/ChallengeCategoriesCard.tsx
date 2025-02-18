"use client";
import { FaRegFileLines } from "react-icons/fa6";

interface ChallengeCategoryCardProps {
  category: string;
  number: number;
  isActive: boolean;
  onClick: () => void;
}

export default function ChallengeCategoryCard({
  category,
  number,
  isActive,
  onClick,
}: ChallengeCategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex gap-4 items-center border-2 border-gray-200 rounded-xl px-4 py-4 ${
        isActive ? "bg-[#D0E0FC]" : "bg-[#F0F2F5]"
      }`}
    >
      <FaRegFileLines
        className={`font-bold ${isActive ? " text-[#2B71F0]" : ""}`}
        size={20}
      />
      <p>{category}</p>
      <div
        className={`rounded-full px-4 py-0 ${
          isActive ? "bg-[#2B71F0] text-white " : "bg-gray-200"
        }`}
      >
        {number}
      </div>
    </div>
  );
}