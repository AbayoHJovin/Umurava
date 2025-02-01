
import workSans from "@/fonts/fonts";
import React from "react";

const StatsSection = () => {
  const stats = {
    year: 1,
    challengesCompleted: "500+",
    users: "10K+",
    countries: "6+",
  };

  return (
    <div
      className={`bg-blue-700 text-white py-8 mx-4 md:mx-10 my-5 px-4 md:px-10 w-full max-w-[1200px] rounded-xl relative overflow-hidden ${workSans.className}`}
    >
      {/* Background Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full opacity-30"></div>

      {/* Stats Content */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16 relative z-10">
        {/* Year Stat */}
        <div className="text-center flex-1 min-w-[120px]">
          <h2 className="text-3xl md:text-4xl font-extrabold">{stats.year}</h2>
          <p className="text-sm md:text-lg mt-2">Year</p>
        </div>

        {/* Challenges Completed Stat */}
        <div className="text-center flex-1 min-w-[120px]">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {stats.challengesCompleted}
          </h2>
          <p className="text-sm md:text-lg mt-2">Challenges Completed</p>
        </div>

        {/* Users Stat */}
        <div className="text-center flex-1 min-w-[120px]">
          <h2 className="text-3xl md:text-4xl font-extrabold">{stats.users}</h2>
          <p className="text-sm md:text-lg mt-2">Users</p>
        </div>

        {/* Countries Stat */}
        <div className="text-center flex-1 min-w-[120px]">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {stats.countries}
          </h2>
          <p className="text-sm md:text-lg mt-2">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;