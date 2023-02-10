import Link from "next/link";
import React from "react";

const ProgressCard = (props) => {
  return (
    <div className="grid grid-cols-4 gap-5 p-3 m-5 text-left bg-gray-200 rounded-md shadow-md w-100">
      <div className="col-span-3">
        <h1>{props.title}</h1>
      </div>
      <div className="col-span-1">
        <Link
          href="activity"
          className="px-2 text-blue-400 border-l-2 border-gray-500"
        >
          {props.view}
        </Link>
      </div>
    </div>
  );
};

export default ProgressCard;
