import React from "react";
import Link from "next/link";

const ShowAnnouncemetCard = ({ title, msg, postDate   }) => {
  // const nameHandler = () => {
  //   letter(title);
  // };
  return (
    <div>
      <div className="w-full h-full p-5 my-5 overflow-hidden rounded shadow-lg cursor-pointer bg-slate-50">
        <div
        //   href={`student/${title}`}
        //   href={`student/${link}`}
        //   onClick={nameHandler}
          className="font-medium text-dark-purple"
        >
          <h2 className="text-2xl ">{title}</h2>
          <p className="py-2 mb-5 text-lg">{msg}</p>
          
         <span className="text-sm text-gray-500 ">Posted On: {postDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowAnnouncemetCard;