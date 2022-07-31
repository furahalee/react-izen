//const AAA = 'filename/AAA'
const RED = "color/RED";
const GREEN = "color/GREEN";
const BLUE = "color/BLUE";

//액션 내보내기
export const red = () => ({ type: RED });
export const green = () => ({ type: GREEN });
export const blue = () => ({ type: BLUE });

//리듀서 초기값
const initialState = {};
//reducer 순수함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RED:
      return { color: "red" };
    case GREEN:
      return { color: "green" };
    case BLUE:
      return { color: "blue" };
    default:
      return state;
  }
};

export default reducer;
