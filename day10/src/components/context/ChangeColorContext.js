import React, { createContext, useMemo, useState, useCallback } from "react";

export const ChangeColorContext = createContext();

const ChangeColorProvider = (props) => {
  const [color, setColor] = useState("hotpink");
  const onColor = useCallback((text) => {
    setColor(text);
  }, []);
  const value = useMemo(() => ({ color, onColor }), [color, onColor]);
  return (
    <ChangeColorContext.Provider value={value}>
      {props.children}
    </ChangeColorContext.Provider>
  );
};

export default ChangeColorProvider;
