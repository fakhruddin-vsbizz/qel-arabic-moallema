import React, { useState } from "react";
import ColorOptions from "../Activity/Canvas/ColorOptions";

import DrawingCanvas from "../Activity/Canvas/DrawingCanvas";

const LetterDetails = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [getColor, setColor] = useState("red");

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };
  console.log(getColor);

  const canvasHandler = () => {
    setShowCanvas((prev) => !prev);
    // setShowCanvas(true);
  };

  return (
    <div className="">
      <div className="h-full n bg-dark-purple">
        <h1 className="p-5 text-3xl text-center text-white">Module1</h1>
        <div className="grid w-full grid-cols-2 gap-5 p-5 md:grid-cols-4 ed-100">
          <div className="col-span-2 sm:col-span-1">
            <div className="h-full gap-3 p-5 text-center text-white rounded-md shadow-md bg-cyan-900 place-content-center ">
              <h2 className="text-2xl">How to speak</h2>
              <img
                src="https://www.learnarabiconline.com/wp-content/uploads/2020/06/image004.jpg"
                className="w-4/5 m-5 "
                alt="letter"
              />
              <button className="p-2 mx-2 my-5 font-bold text-black bg-green-200 rounded-md border-1">
                {props.name} "{props.symbol}"
              </button>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-md shadow-md sm:col-span-3">
            <div className="h-full p-3 text-center md:p-5 lg place-content-center">
              <h2 className="text-2xl">How to Write "{props.name || "Mim"}"</h2>
              <div className="grid grid-cols-2 mx-0 mt-5 text-white rounded-md md:grid-cols-4 md:mx-5 sm:p-10 bg-cyan-900">
                <div className="m-5 span-cols-2 md:span-cols-1">
                  <span>Isolated Form</span>
                  <h1 className="mt-5 text-5xl md:text-8xl" dir="rtl" lang="ar">
                    {props.symbol || م}
                  </h1>
                </div>

                <div className="m-4 span-cols-2 md:span-cols-1">
                  <span>Initial Form</span>
                  <h1
                    className="mt-5 text-5xl text-gray-300 md:text-8xl"
                    dir="rtl"
                    lang="ar"
                  >
                    {props.initial || مـ}
                  </h1>
                </div>
                <div className="m-5 span-cols-2 md:span-cols-1">
                  <span>Medial Form</span>
                  <h1
                    className="mt-5 text-5xl text-gray-300 md:text-8xl"
                    dir="rtl"
                    lang="ar"
                  >
                    {props.middle || ـمـ}
                  </h1>
                </div>
                <div className="m-5 span-cols-2 md:span-cols-1 h-fit">
                  <span>Final Form</span>
                  <h1
                    className="mt-5 text-5xl text-gray-300 md:text-8xl"
                    dir="rtl"
                    lang="ar"
                  >
                    {props.final || ـم}
                  </h1>
                </div>
              </div>
              {showCanvas && (
                <div>
                  <h2 className="my-20 text-2xl font-extrabold border-b text-dark-purple pc-2 ">
                    Start Drawing
                  </h2>

                  <div className="grid w-full grid-cols-8 mx-0 mt-5 ">
                    <div className="col-span-8 p-5 mt-15 sm:-mt-16">
                      <ColorOptions finalColor={changeColorPri} />
                    </div>
                    <div className="w-full col-span-8 m-4 ">
                      <DrawingCanvas color={getColor} className="w-full " />
                    </div>
                  </div>
                </div>
              )}
              {!showCanvas && (
                <div className="grid grid-cols-2 p-5 pt-0 mx-0 mb-3 -mt-2 text-white rounded-md md:grid-cols-4 md:mx-5 sm: bg-cyan-900">
                  <div className="m-5 span-cols-2 md:span-cols-1"></div>

                  <div className="m-5 span-cols-2 md:span-cols-1">
                    <span>Initial Use</span>
                    <h1
                      className="mt-5 text-5xl md:text-7xl"
                      dir="rtl"
                      lang="ar"
                    >
                      {props.exInitial || ﻳَﻮﻡ}
                    </h1>
                  </div>
                  <div className="m-5 span-cols-2 md:span-cols-1">
                    <span>Middle Use</span>
                    <h1
                      className="mt-5 text-5xl md:text-7xl"
                      dir="rtl"
                      lang="ar"
                    >
                      {props.exMiddle || ﻳَﻮﻡ}
                    </h1>
                  </div>
                  <div className="m-5 span-cols-2 md:span-cols-1 h-fit">
                    <span>Final Use</span>
                    <h1
                      className="mt-5 text-5xl md:text-7xl"
                      dir="rtl"
                      lang="ar"
                    >
                      {props.exFinal || ﻋَﺎﻡ}
                    </h1>
                  </div>
                </div>
              )}
              <button
                onClick={canvasHandler}
                className="p-2 mx-2 my-5 bg-blue-300 rounded-md border-1"
              >
                {" "}
                {showCanvas && <p>Close</p>}
                {!showCanvas && <p>Draw</p>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterDetails;
