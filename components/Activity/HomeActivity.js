import React, { useState } from "react";
import HomeActivityCard from "../layout/HomeActivityCard";

const Alphabates = [
  { letter: "خ", title: "Khaa" },
  { letter: "ح", title: "Haa" },
  { letter: "ج", title: "Jeem" },
  { letter: "ث", title: "Thaa" },
  { letter: "ت", title: "Taa" },
  { letter: "ب", title: "Baa" },
  { letter: "ا", title: "Alif" },
  { letter: "س", title: "Saad" },
  { letter: "ش", title: "Sheen" },
  { letter: "ص", title: "Seen" },
  { letter: "ز", title: "Zai" },
  { letter: "ر", title: "Raa" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "د", title: "dal" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ف", title: "Faa" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ع", title: "Ayn" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ط", title: "Taa" },
  { letter: "ض", title: "Daad" },
  { letter: "ي", title: "Yaa" },
  { letter: "و", title: "Waaw" },
  { letter: "ه", title: "haa" },
  { letter: "ن", title: "Noon" },
  { letter: "م", title: "Meem" },
  { letter: "ل", title: "Laam" },
  { letter: "ك", title: "Kaaf" },
];

const HomeActivity = () => {
  const [letterName, setLetterName] = useState();

  console.log(letterName);
  return (
    <>
      <div className=" text-center">
        <img src="" />
        <h2 className="text-2xl font-extrabold text-dark-purple mt-10 ">
          Module 1
        </h2>

        <h2 className=" text-2xl font-extrabold text-dark-purple border-b-2 border-b-gray-200 pb-4 mt-10">
          Arabic Letters
        </h2>
        <span className=" "></span>
      </div>
      <div className="px-56">
        <div className="flex flex-wrap m-4 justify-center ">
          {Alphabates.map((alphabate) => (
            <HomeActivityCard
              name={alphabate.letter}
              title={alphabate.title}
              letter={setLetterName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeActivity;
