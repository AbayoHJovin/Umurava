"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

interface TopBarProps {
  profileImageUrl: string | StaticImport;
  onMobileSidebarOpen: () => void;
}

export default function TopBar({
  profileImageUrl,
  onMobileSidebarOpen,
}: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 w-full">
      <div className="md:hidden items-center flex  p-3">
        <button
          onClick={onMobileSidebarOpen}
          className="text-2xl text-[#2B71F0]"
        >
          <FaBars />
        </button>
      </div>
      <div className="relative w-[55%] mt-4">
        <svg
          className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-700 cursor-pointer"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a6 6 0 104.472 10.154l3.38 3.381a1 1 0 001.415-1.414l-3.38-3.381A6 6 0 008 2zm4 6a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          type="search"
          placeholder="Search here..."
          className="pl-12 pr-4 py-4 w-full bg-[#F9FAFB] rounded-md shadow-sm focus:outline-none text-sm"
        />
      </div>
      <div className="flex items-center gap-2 pt-2">
        <IoNotificationsOutline
          className="bg-gray-200 rounded-full px-2 py-2 w-10 h-10 text-slate-700"
          size={25}
        />

        <Image
          src={profileImageUrl}
          alt="Profile Image"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
