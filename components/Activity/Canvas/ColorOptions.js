import { useState } from "react";
import ColorButton from "./ColorButton";
import styles from "./ColorOption.module.css";

const ColorOptions = (props) => {
  const changeColorSec = (colorData) => {
    //console.log(getColor);
    props.finalColor(colorData);
  };

  return (
    <>
      <div className={styles.colorLayout}>
        <div className={styles.text}>
          <h3>Select Color</h3>
        </div>
        <ColorButton color={"red"} change={changeColorSec} />
        <ColorButton color={"green"} change={changeColorSec} />
        <ColorButton color={"blue"} change={changeColorSec} />
        <ColorButton color={"black"} change={changeColorSec} />
        <ColorButton color={"grey"} change={changeColorSec} />
        <ColorButton color={"orange"} change={changeColorSec} />
        <ColorButton color={"pink"} change={changeColorSec} />
      </div>
    </>
  );
};

export default ColorOptions;
