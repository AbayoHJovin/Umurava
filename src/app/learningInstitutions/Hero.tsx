import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function EducationHeroSection() {
  return (
    <div
      className={`relative flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 px-4 xmd:px-10 llg:px-36 bg-white ${workSans.className}`}
    >
      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/learningInst.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // Dimmed effect for the background image
        }}
      ></div>

      {/* Text Section */}
      <div className="relative text-start xsm:text-center xmd:text-left z-10 xmd:w-1/2 xmd:pr-10">
        <h1
          className={`text-[#2B71F0] font-[700] text-[24px] sm:text-[28px] md:text-[32px] xmd:text-[36px] leading-tight ${workSans.className} text-center xmd:text-left`}
        >
          Accelerate Your Students and Trainees Employability and Career Growth
          through Project-based Learning Solution
        </h1>
        <p className="text-base sm:text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5 sm:my-6">
          We partner with Universities, Schools, and Training Institutions to
          build the work experience of their students and trainees through
          project-based learning challenges and hackathons.
        </p>
        <button className="bg-[#2B71F0] text-white py-3 px-7 rounded-sm font-semibold hover:bg-[#1e5bbf] transition-colors duration-300">
          Partner with us
        </button>
      </div>

      {/* Image Section for larger screens */}
      <div className="hidden xmd:block relative z-10 xmd:w-1/2">
        <Image
          src="/learningInst.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover w-full h-auto"
          priority // Ensure the image loads quickly
        />
      </div>
    </div>
  );
}