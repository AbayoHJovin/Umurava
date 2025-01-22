import React from "react";

const StatsSection = () => {
    const stats={
        year:1,
        challengesCompleted:"500+",
        users:"10K+",
        countries:"6+"
    }
  return (
    <div className="bg-blue-700 text-white py-8 mx-10 my-5 px-10 w-[900px]  rounded-xl relative overflow-hidden">
      <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-blue-500 rounded-full opacity-30"></div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">{stats.year}</h2>
          <p className="text-lg mt-2">Year</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">{stats.challengesCompleted}</h2>
          <p className="text-lg mt-2">Challenges Completed</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">{stats.users}</h2>
          <p className="text-lg mt-2">Users</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">{stats.countries}</h2>
          <p className="text-lg mt-2">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
