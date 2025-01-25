import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <div
      className={`relative flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 sm:space-x-10 p-4 bg-white ${workSans.className}`}
    >
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/aboutImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      <div className="relative text-start ssm:text-center xmd:text-left z-10">
        <h1
          className={`text-[#2B71F0] font-[700] text-[20px] md:text-[25px] xmd:text-[30px] ${workSans.className}`}
        >
          Our Story
        </h1>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5">
          With 3 years of experience matching African digital talents to local
          and global job markets, we still remain with a big number of jobs that
          remain unfilled due to the lack of experienced African Talents.
        </p>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 mt-4">
          Driven by our mission to place skilled and professional digital
          talent, we created Skills Challenges as a project-based learning
          solution for talents to gain real-world experience, solve problems,
          and build portfolios so that they become ready for global job markets.
        </p>
      </div>

      {/* Image Section for larger screens */}
      <div className="hidden xmd:block relative z-10">
        <Image
          src="/aboutImage.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
