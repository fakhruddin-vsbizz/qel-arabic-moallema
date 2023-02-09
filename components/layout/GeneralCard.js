import React from "react";
import Link from "next/link";

const HomeActivityCard = ({ name, title, letter, btnText, link  }) => {
  const nameHandler = () => {
    letter(title);
  };
  return (
    <div>
      <div className="items-center h-full p-5 m-5 overflow-hidden rounded shadow-lg w-fit justify-cente bg-slate-50">
        <div
        //   href={`student/${title}`}
        //   href={`student/${link}`}
        //   onClick={nameHandler}
          className="font-extrabold text-center text-dark-purple"
        >
          <h2 className="text-4xl ">{name}</h2>
          <h2 className="py-2 text-lg">{title}</h2>
          
          <Link href={link} className="px-10 py-1 m-2 text-white rounded-md bg-dark-purple">{btnText}</Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomeActivityCard;