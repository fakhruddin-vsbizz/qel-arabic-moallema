import React from "react";
import Link from "next/link";
const ActivityCard = ({ path }) => {
  return (
    <>
      {" "}
      <div className="w-64 h-80 rounded overflow-hidden shadow-lg inline-block mr-4 ml-4 items-center justify-center bg-slate-50 pt-6">
        <img src={`${path}`} />
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2"></div>
          <p className="text-gray-700 text-base"></p>
        </div>
        <div className="flex items-center justify-center mt-4 mb-10">
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
