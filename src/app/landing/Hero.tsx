import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className={`flex flex-col xmd:flex-row items-center justify-evenly min-h-[85vh] mb-10 px-4 bg-white ${workSans.className}`}
    >
      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/HeroImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // Dimmed effect for the background image
        }}
      ></div>

      {/* Text Section */}
      <div className="text-center xmd:text-left z-10">
        <h1
          className={`text-[#2B71F0] text-center md:text-start font-[700] text-[25px] md:text-[35px] xmd:text-[40px] ${workSans.className}`}
        >
          Build work experience
          <span className="inline md:block"> through Skills Challenges</span>
          <span className="inline md:block"> Program</span>
        </h1>
        <p className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5 text-center md:text-start">
          Enhance your employability and accelerate your career growth by
          working on hands-on projects & hackathons from various businesses &
          organizations.
        </p>
        <button className="bg-[#2B71F0] text-white py-3 px-7 rounded-sm font-semibold">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden xmd:block z-10">
        <Image
          src="/HeroImage.png"
          width={500}
          height={500}
          alt="Hero image"
          className="object-cover"
        />
      </div>
    </div>
  );
}