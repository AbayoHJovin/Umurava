"use client";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminEditChallengesDetails() {
  const [text, setText] = useState<string[]>(["• "]);
  const [requirementsText, setRequirementsText] = useState<string[]>(["• "]);
  const [deliverablesText, setDeliverablesText] = useState<string[]>(["• "]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const lines = value.split("\n");
    setText(lines);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setText((prevText) => [...prevText, "• "]);
    }
  };

  const handleRequirementsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const lines = value.split("\n");
    setRequirementsText(lines);
  };

  const handleRequirementsKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setRequirementsText((prevText) => [...prevText, "• "]);
    }
  };

  const handleDeliverablesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const lines = value.split("\n");
    setDeliverablesText(lines);
  };

  const handleDeliverablesKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      setDeliverablesText((prevText) => [...prevText, "• "]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      projectDescription: text.filter((line) => line.trim() !== ""),
      requirements: requirementsText.filter((line) => line.trim() !== ""),
      deliverables: deliverablesText.filter((line) => line.trim() !== ""),
    };
    console.log(data);
  };

  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        profileImageUrl="/sf.png"
        href={[
          "/admin",
          "/admin/challenges",
          "/admin/settings",
          "/admin/help",
          "/admin/family",
        ]}
      />

      <SideBar
        profileImageUrl="/sf.png"
        href={[
          "/admin",
          "/admin/challenges",
          "/admin/settings",
          "/admin/help",
          "/admin/family",
        ]}
        mobile
        mobileSidebarOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />
      <div className="ml-0 md:ml-20 lg:ml-[20%] w-full transition-all duration-300">
        <TopBar
          profileImageUrl="/sf.png"
          onMobileSidebarOpen={() => setMobileSidebarOpen(true)}
        />{" "}
        <div className="flex items-center w-[96%] justify-between">
          <div className="flex gap-6 items-center ps-10 py-6">
            <div className="border border-gray-200 hover:bg-gray-100 duration-500 rounded-md px-4 py-4">
              <HiArrowSmallLeft />
            </div>
            <p
              onClick={() => router.back()}
              className="text-gray-600 text-xl truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            >
              Go Back /
            </p>
            <Link
              href={"/talent/challenges"}
              className="text-gray-400 text-xl truncate max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            >
              Challenges & Hackathons /
            </Link>
            <a
              href="/admin/challenges/create"
              className="text-[#2B71F0] text-xl font-medium"
            >
              Create New Challenge
            </a>
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-10 flex gap-12 border-t-2 border-gray-200">
          <form
            className="bg-white border-2 border-gray-200 rounded-xl py-6 px-2 w-[60%] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <legend className="text-3xl font-semibold text-center">
                Create a new Challenge
              </legend>
              <p className="text-gray-500 text-xl text-center">
                Fill out these details to build your broadcast
              </p>
            </div>
            <div className="px-6 space-y-6">
              <div className="space-y-3">
                <label htmlFor="title" className="block text-xl text-gray-600">
                  Challenge/ Hackathon title
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-xl"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center w-full gap-6">
                <div className="flex-1 space-y-3">
                  <label
                    htmlFor="deadline"
                    className="block text-xl text-gray-600"
                  >
                    Deadline
                  </label>
                  <input
                    type="text"
                    value={"24/12/2024"}
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-xl"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <label
                    htmlFor="duration"
                    className="block text-xl text-gray-600"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-xl"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-6">
                <div className="flex-1 space-y-3">
                  <label
                    htmlFor="prize"
                    className="block text-xl text-gray-600"
                  >
                    Money Prize
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-xl"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-xl text-gray-600"
                  >
                    Contact Email
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-xl"
                  />
                </div>
              </div>
              <div className="py-4 space-y-3">
                <label
                  htmlFor="duration"
                  className="block text-xl text-gray-600"
                >
                  Project Brief
                </label>
                <textarea
                  name="projectBrief"
                  id="projectBrief"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-xl"
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 50 characters
                </p>
              </div>
              <div className="py-4 space-y-3">
                <label
                  htmlFor="projectDescription"
                  className="block text-xl text-gray-600"
                >
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  id="projectDescription"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-xl"
                  value={text.join("\n")}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 250 characters
                </p>
              </div>
              <div className="py-4 space-y-3">
                <label
                  htmlFor="requirements"
                  className="block text-xl text-gray-600"
                >
                  Project Requirements
                </label>
                <textarea
                  name="requirements"
                  id="requirements"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-xl"
                  value={requirementsText.join("\n")}
                  onChange={handleRequirementsChange}
                  onKeyDown={handleRequirementsKeyDown}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 500 characters
                </p>
              </div>
              <div className="py-4 space-y-3">
                <label
                  htmlFor="deliverable"
                  className="block text-xl text-gray-600"
                >
                  Deliverables
                </label>
                <textarea
                  name="deliverable"
                  id="deliverable"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-xl"
                  value={deliverablesText.join("\n")}
                  onChange={handleDeliverablesChange}
                  onKeyDown={handleDeliverablesKeyDown}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 500 characters
                </p>
              </div>
              <div className="flex items-center gap-10 w-full py-12">
                <button className="border-2 border-[#2B71F0] bg-white hover:bg-[#2B71F0] hover:text-white duration-500 text-[#2B71F0] rounded-xl py-6 px-6 w-[35%] text-xl">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 border-[#2B71F0] bg-[#2B71F0] hover:bg-blue-800 duration-500 text-white rounded-xl py-6 px-6 flex-1 text-xl"
                >
                  Update challenge
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}