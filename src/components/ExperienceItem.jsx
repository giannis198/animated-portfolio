import React from "react";

const ExperienceItem = ({ side }) => {
  return (
    <div className="grid gap-x-4 justify-between grid-cols-[1fr_.3fr_1fr]">
      {/* left */}
      <div className={`${side === "right" && "col-start-3"}`}>
        {/* title */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          JavaScript Senior Developer
        </div>
        {/* Desc */}
        <div className="p-3 text-sm italic">
          Expert in JS, frameworks, mentoring, problem-solving, team
          collaboration.
        </div>
        {/* job date */}
        <div className="p-3 text-red-400 text-sm font-semibold">
          2024-present
        </div>
        {/* company name */}
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
          Apple
        </div>
      </div>

      {/* center */}
      <div
        className={`flex items-center justify-center ${
          side === "right" && "col-start-2 row-start-1"
        }`}
      >
        {/* line */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* circle */}
          <div className="absolute top-0 -left-2 w-5 h-5  rounded-full ring-4 ring-red-500 bg-white" />
        </div>
      </div>
      {/* right */}
      <div className=""></div>
    </div>
  );
};

export default ExperienceItem;
