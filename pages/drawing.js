
import AuthContext from "@/components/store/auth-context";
// import React, { useContext } from "react";
import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

// ReactDOM.render(<CanvasDraw />, document.getElementById("root"));

const Drawing = () => {
    // static defaultProps = {
    //     onChange: null
    //     loadTimeOffset: 5,
    //     lazyRadius: 30,
    //     brushRadius: 12,
    //     brushColor: "#444",
    //     catenaryColor: "#0a0302",
    //     gridColor: "rgba(150,150,150,0.17)",
    //     hideGrid: false,
    //     canvasWidth: 400,
    //     canvasHeight: 400,
    //     disabled: false,
    //     imgSrc: "",
    //     saveData: null,
    //     immediateLoading: false,
    //     hideInterface: false,
    //     gridSizeX: 25,
    //     gridSizeY: 25,
    //     gridLineWidth: 0.5,
    //     hideGridX: false,
    //     hideGridY: false
    //     enablePanAndZoom: false,
    //     mouseZoomFactor: 0.01,
    //     zoomExtents: { min: 0.33, max: 3 },
    //   };

  return (
    <>
      Drawing
      <CanvasDraw imgSrc="https://bytes.com/attachments/attachment/3407d1276833595/dottedarabic.jpg" />    
    </>
  );

  
};
export default Drawing;