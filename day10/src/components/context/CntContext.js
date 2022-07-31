import React, { createContext, useContext, useReducer } from "react";
//초기값
const initialState = { count: 0 };
//리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const CntContext = createContext();
export const useCnt = () => useContext(CntContext);

const CntProvider = ({ children }) => {
  const [userStore, userDispatch] = useReducer(reducer, initialState);
  return (
    <CntContext.Provider value={{ userStore, userDispatch }}>
      {children}
    </CntContext.Provider>
  );
};

export default CntProvider;
