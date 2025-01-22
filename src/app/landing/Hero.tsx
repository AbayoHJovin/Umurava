import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 sm:space-x-10 px-4 bg-white">
      <div className="text-center xmd:text-left">
        <h1
          className={`text-[#2B71F0] font-[700] text-[35px] xmd:text-[45px] ${workSans.variable}`}
        >
          Build work experience
          <span className="block">through Skills Challenges</span>
          <span className="block">Program</span>
        </h1>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5">
          Enhance your employability and accelerate your career growth by
          working on hands-on projects & hackathons from various businesses &
          organizations.
        </p>
        <button className="bg-[#2B71F0] text-white py-3 px-7 rounded-sm font-semibold">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden xmd:block">
        <Image
          src="/heroImage.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
