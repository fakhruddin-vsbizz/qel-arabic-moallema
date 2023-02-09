import React from "react";
import Link from "next/link";
const StudentProgressCards = ({ name, getName }) => {
  const batchDetailHandler = () => {
    getName(name);
  };

  return (
    <>
      <div className=" hover:bg-dark-purple hover:text-white w-44 h-16 rounded overflow-hidden shadow-lg inline-block mr-4 ml-4 items-center justify-center bg-slate-50 pt-4">
        <button onClick={batchDetailHandler} className=" text-center ">
          <div className="font-bold text-xl">{name}</div>
        </button>
      </div>
    </>
  );
};

export default StudentProgressCards;
