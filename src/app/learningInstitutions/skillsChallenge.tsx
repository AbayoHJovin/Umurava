import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function SkillsChallengesSection() {
  return (
    <div
      className={`relative flex flex-col xmd:flex-row items-center justify-center min-h-[85vh] mb-10 space-y-6 sm:space-y-0 sm:space-x-10 px-4 bg-white ${workSans.className}`}
    >
      <div
        className="absolute inset-0 xmd:hidden"
        style={{
          backgroundImage: "url('/banner_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      ></div>

      <div className="relative text-start ssm:text-center xmd:text-left z-10">
        <h1
          className={`text-black font-[700] text-[20px] md:text-[25px] xmd:text-[30px] ${workSans.className}`}
        >
          How Skills Challenges Program can Be
          <span className="inline md:block">
            Integrated into your Learning Institution
          </span>
        </h1>
        <ul className="text-lg max-w-[35rem] mx-auto xmd:mx-0 my-5 space-y-4">
          <li className="flex items-start space-x-3">
            <span className="bg-[#2B71F0] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">1</span>
            <p>As Career Development and Job Readiness Program</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="bg-[#2B71F0] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">2</span>
            <p>As Skills Assessments Method after a course or a term</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="bg-[#2B71F0] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">3</span>
            <p>As extracurricular activities to complement academic courses</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="bg-[#2B71F0] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">4</span>
            <p>As the portfolio of the Students</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="bg-[#2B71F0] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">5</span>
            <p>As part of Capstone Projects or final-year assignments</p>
          </li>
        </ul>
      </div>

      {/* Image Section for larger screens */}
      <div className="hidden xmd:block relative z-10">
        <Image
          src="/banner_image.png"
          width={500}
          height={500}
          alt="Skills Challenges"
          className="object-cover"
        />
      </div>
    </div>
  );
}