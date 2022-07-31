import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const Color = () => {
  const { color, onRed, onBlue, onGreen, onTomato } = useContext(ColorContext);
  return (
    <div>
      <h1 style={{ color: color }}>컬러: {color}</h1>
      <p>
        <button onClick={() => onRed()}>red</button>
        <button onClick={() => onBlue()}>green</button>
        <button onClick={() => onGreen()}>blue</button>
        <button onClick={() => onTomato()}>tomato</button>
      </p>
    </div>
  );
};

export default Color;
