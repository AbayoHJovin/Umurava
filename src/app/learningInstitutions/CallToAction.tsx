import workSans from "@/fonts/fonts";

export default function CallToActionSection() {
  return (
    <div className="relative flex items-center container mx-auto justify-center bg-blue-600 py-20 px-6 rounded-2xl overflow-hidden text-center">
      {/* Top-right light-blue rounded arc */}
      <div className="absolute top-[-100px] right-[-100px]">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" fill="#4FAAFF" opacity="0.3" />
        </svg>
      </div>

      {/* Bottom-left light-blue rounded arc */}
      <div className="absolute bottom-[-100px] left-[-100px]">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" fill="#4FAAFF" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
          Ready to transform your learning institution?
        </h2>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Let’s Partner
        </button>
      </div>
    </div>
  );
}
