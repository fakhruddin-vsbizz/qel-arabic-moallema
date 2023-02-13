import React from "react";
import Link from "next/link";
const StudentProgressCards = ({ name, getName }) => {
  const batchDetailHandler = () => {
    getName(name);
  };

  return (
    <>
      <div className="items-center justify-center inline-block h-24 pt-4 ml-4 mr-4 overflow-hidden rounded shadow-lg hover:bg-dark-purple hover:text-white w-44 bg-slate-50">
        <button onClick={batchDetailHandler} className="text-center ">
          <div className="text-xl font-bold">{name}</div>
        </button>
      </div>
    </>
  );
};

export default StudentProgressCards;
