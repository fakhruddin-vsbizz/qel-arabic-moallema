import React from "react";
import Link from "next/link";

const HomeActivityCard = ({ name, title, letter }) => {
  const nameHandler = () => {
    letter(title);
  };
  return (
    <div>
      <div className=" w-32 h-26 mt-6 rounded overflow-hidden shadow-lg mr-4  items-center justify-center bg-slate-50 py-2 ">
        <Link
          href={`student/${title}`}
          onClick={nameHandler}
          className="font-extrabold text-center text-dark-purple"
        >
          <h2 className="  text-4xl">{name}</h2>
          <h2 className="pt-2  text-lg">{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomeActivityCard;
