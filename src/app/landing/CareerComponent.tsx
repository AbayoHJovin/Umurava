import workSans from "@/fonts/fonts";
import Image from "next/image";

export default function CareerComponent() {
  return (
    <div
      className={`relative bg-blue-500 ${workSans.className} text-white p-6 md:p-8 rounded-lg mx-auto overflow-hidden h-auto max-w-7xl my-6`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-40 h-40 text-blue-400 transform translate-x-1/3 -translate-y-1/3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="15"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/careerImage.png"
              alt="Placeholder for career image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Unlock Your Career Potential Today!
          </h2>
          <p className="text-base md:text-lg mb-6">
            Join a challenge or a hackathon to gain valuable work experience,
            build an impressive portfolio and increase your chances to land job
            opportunities and accelerate your career growth.
          </p>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100">
            View Challenge
          </button>
        </div>
      </div>
    </div>
  );
}