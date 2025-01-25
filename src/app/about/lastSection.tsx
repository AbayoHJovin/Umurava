import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function LastAboutSection() {
  return (
    <div
      className={`relative flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 sm:space-x-10 p-4 bg-white ${workSans.className}`}
    >
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/about2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      <div className="relative text-start ssm:text-center xmd:text-left z-10">
        <h1
          className={`text-black font-[700] text-[20px] md:text-[25px] xmd:text-[30px] ${workSans.className}`}
        >
          Skills Challenges Program is built on
          <span className="inline md:block">
            {" "}
            the Umurava Talent Marketplace
          </span>
          <span className="inline md:block"> Platform</span>
        </h1>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5">
          A Project-based Learning Solution aimed at providing young and senior
          talents with an opportunity to showcase their skills to real-world
          projects and challenges from our partner companies and organizations.
        </p>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 mt-4">
          Umurava Skills Challenges enables young talents to build a portfolio
          and experience that increases their readiness to access job
          opportunities and projects.
        </p>
        <button className="bg-[#2B71F0] text-white py-3 px-7 rounded-md my-5 font-semibold">
          Get Started
        </button>
      </div>

      <div className="hidden xmd:block relative z-10">
        <Image
          src="/about2.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
