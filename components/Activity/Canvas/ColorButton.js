import { useState } from "react";
import styles from "./ColorOption.module.css";

const ColorButton = (props) => {
  const changeColor = () => {
    //console.log(getColor);
    props.change(props.color);
  };
  return (
    <>
      <button
        style={{ backgroundColor: `${props.color}` }}
        className={styles.mainBtn}
        onClick={changeColor}
      ></button>
    </>
  );
};
export default ColorButton;
