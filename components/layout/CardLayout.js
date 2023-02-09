import React from "react";
import Link from "next/link";
const CardLayout = ({ title, path, description, svg }) => {
  return (
    <div className="w-64 h-80 rounded overflow-hidden shadow-lg inline-block mr-4 ml-4 items-center justify-center bg-slate-50 pt-6">
      {svg}
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex items-center justify-center mt-4 mb-10">
        <div>
          <Link
            href={path}
            className=" bg-dark-purple hover:bg-light-gray text-white font-bold py-2 px-4 rounded "
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
