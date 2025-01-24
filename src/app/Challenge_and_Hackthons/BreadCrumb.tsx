"use client";
import { useRouter } from "next/navigation";
import { LuSquareArrowLeft } from "react-icons/lu";
export default function Breadcrumb() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col sssm:flex-row items-center container mx-auto gap-3">
      <div
        onClick={() => router.back()}
        className="flex cursor-pointer items-center gap-3"
      >
        <LuSquareArrowLeft className="text-[#667185]" size={30} />
        <h1 className="text-[#667185] text-lg ">Go Back </h1>
      </div>
      <div>
        <h1 className="text-blue-600 cursor-pointer">
          / Challenges & Hackathons
        </h1>
      </div>
    </div>
  );
}
