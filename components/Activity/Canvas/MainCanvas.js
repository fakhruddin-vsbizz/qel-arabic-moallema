import React, { useState } from "react";
import CanvasDesign from './CanavasDesign'
import ColorOptions from './ColorOptions'



const MainCanvas = () => {
    
    const [getColor, setColor] = useState("red");
const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };
  console.log(getColor);


  return (
    <>
        <ColorOptions finalColor={changeColorPri} />
        <CanvasDesign color={getColor} />
    </>
  )
}

export default MainCanvas