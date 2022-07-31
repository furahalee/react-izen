import React, { createContext, useMemo, useState, useCallback } from "react";

export const ColorContext = createContext();

const ColorProvider = (props) => {
  const [color, setColor] = useState("hotpink");
  const onRed = useCallback(() => {
    setColor("red");
  }, []);
  const onGreen = useCallback(() => {
    setColor("green");
  }, []);
  const onBlue = useCallback(() => {
    setColor("blue");
  }, []);
  const onTomato = useCallback(() => {
    setColor("tomato");
  }, []);

  //useMemo
  const value = useMemo(
    () => ({ color, onRed, onBlue, onGreen, onTomato }),
    [color, onRed, onBlue, onGreen, onTomato]
  );

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
