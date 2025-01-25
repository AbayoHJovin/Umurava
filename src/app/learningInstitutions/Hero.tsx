import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function EducationHeroSection() {
  return (
    <div
      className={`relative flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 sm:space-x-10 px-4 bg-white ${workSans.className}`}
    >
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/learningInst.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      <div className="relative text-start xsm:text-center xmd:text-left z-10">
        <h1
          className={`text-[#2B71F0] font-[700] text-[20px] md:text-[25px] xmd:text-[30px] ${workSans.className}`}
        >
          Accelerate Your Students and Trainees
          <span className="inline md:block">
            {" "}
            Employability and Career Growth through
          </span>
          <span className="inline md:block">
            {" "}
            Project-based Learning Solution
          </span>
        </h1>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5">
          We partner with Universities, Schools, and Training Institutions to
          build the work experience of their students and trainees through
          project-based learning challenges and hackathons.
        </p>
        <button className="bg-[#2B71F0] text-white py-3 px-7 rounded-sm font-semibold">
          Partner with us
        </button>
      </div>

      {/* Image Section for larger screens */}
      <div className="hidden xmd:block relative z-10">
        <Image
          src="/learningInst.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
